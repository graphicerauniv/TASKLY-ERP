import express from 'express';
import { z } from 'zod';
import { db, id, serialize } from '../db.js';
import { asyncHandler } from '../lib/async-handler.js';
import { slugify } from '../lib/slug.js';
import { bedNumbers, generateRoomNumbers } from '../services/hostel-structure.js';

export const hostelsRouter = express.Router();
const MAX_GENERATED_ROOMS = 5000;

const hostelSchema = z.object({
  name: z.string().trim().min(2).max(120),
  type: z.enum(['boys', 'girls', 'co-ed']),
  blockCount: z.coerce.number().int().min(0).max(30),
  floorCount: z.coerce.number().int().min(0).max(30),
  plannedRoomCount: z.coerce.number().int().min(0).max(MAX_GENERATED_ROOMS),
});
const roomSchema = z.object({
  roomType: z.string().trim().min(1).max(80),
  capacity: z.coerce.number().int().min(1).max(20),
  isActive: z.boolean().optional(),
});
const blockSchema = z.object({
  hostelId: z.string(),
  name: z.string().trim().min(1).max(80),
});
const floorSchema = z.object({
  hostelId: z.string(),
  name: z.string().trim().min(1).max(80),
});
const manualRoomSchema = z.object({
  hostelId: z.string(),
  blockId: z.string(),
  floorId: z.string(),
  roomNumber: z.string().trim().min(1).max(40),
});
const generatedRoomsSchema = z.object({
  hostelId: z.string(),
  blockId: z.string(),
  floorId: z.string(),
  prefix: z.string().trim().max(20).default(''),
  startNumber: z.coerce.number().int().min(1).max(999999),
  count: z.coerce.number().int().min(1).max(500),
});
const capacitySchema = z.object({
  academicSession: z.string().trim().min(4).max(30),
  capacity: z.coerce.number().int().min(1).max(50),
  roomType: z.string().trim().min(1).max(80),
});
const allocationSchema = z.object({
  studentAdmissionId: z.string(),
  academicSession: z.string().trim().min(4).max(30),
  roomId: z.string(),
  bedNumber: z.coerce.number().int().min(1).max(20),
});
const transferSchema = z.object({
  roomId: z.string(),
  bedNumber: z.coerce.number().int().min(1).max(20),
  reason: z.string().trim().max(240).optional().default(''),
});

hostelsRouter.get(
  '/',
  asyncHandler(async (request, response) => {
    const session = String(request.query.session || '');
    const [hostels, roomStats, occupiedStats] = await Promise.all([
      db().collection('hostels').find({}).sort({ name: 1 }).toArray(),
      db()
        .collection('hostelRooms')
        .aggregate([
          { $group: { _id: '$hostelId', roomCount: { $sum: 1 }, bedCount: { $sum: '$capacity' } } },
        ])
        .toArray(),
      db()
        .collection('hostelAllocations')
        .aggregate([
          { $match: { status: 'active', ...(session ? { academicSession: session } : {}) } },
          { $group: { _id: '$hostelId', occupiedBeds: { $sum: 1 } } },
        ])
        .toArray(),
    ]);
    const roomsByHostel = new Map(roomStats.map((item) => [String(item._id), item]));
    const occupiedByHostel = new Map(occupiedStats.map((item) => [String(item._id), item]));
    response.json({
      items: hostels.map((hostel) => {
        const room = roomsByHostel.get(String(hostel._id)) || {};
        const occupied = occupiedByHostel.get(String(hostel._id)) || {};
        return serialize({
          ...hostel,
          floorCount: hostel.floorCount ?? hostel.floorsPerBlock ?? 0,
          plannedRoomCount: hostel.plannedRoomCount ?? room.roomCount ?? 0,
          roomCount: room.roomCount || 0,
          bedCount: room.bedCount || 0,
          occupiedBeds: occupied.occupiedBeds || 0,
        });
      }),
    });
  }),
);

hostelsRouter.post(
  '/',
  asyncHandler(async (request, response) => {
    const data = hostelSchema.parse(request.body);
    const now = new Date();
    const document = {
      ...data,
      structureMode: 'manual',
      code: uniqueCode(data.name),
      isActive: true,
      createdBy: id(request.admin._id),
      updatedBy: id(request.admin._id),
      createdAt: now,
      updatedAt: now,
    };
    const result = await db().collection('hostels').insertOne(document);
    const hostel = { ...document, _id: result.insertedId };
    response.status(201).json({ item: serialize({ ...hostel, roomCount: 0, bedCount: 0 }) });
  }),
);

hostelsRouter.patch(
  '/:hostelId',
  asyncHandler(async (request, response) => {
    const data = z
      .object({
        name: z.string().trim().min(2).max(120).optional(),
        type: z.enum(['boys', 'girls', 'co-ed']).optional(),
        blockCount: z.coerce.number().int().min(0).max(30).optional(),
        floorCount: z.coerce.number().int().min(0).max(30).optional(),
        plannedRoomCount: z.coerce.number().int().min(0).max(MAX_GENERATED_ROOMS).optional(),
        isActive: z.boolean().optional(),
      })
      .parse(request.body);
    const hostelId = id(request.params.hostelId);
    const result = await db()
      .collection('hostels')
      .findOneAndUpdate(
        { _id: hostelId },
        {
          $set: { ...data, updatedBy: id(request.admin._id), updatedAt: new Date() },
          $unset: { wingCount: '' },
        },
        { returnDocument: 'after' },
      );
    if (!result) return response.status(404).json({ message: 'Hostel not found.' });
    if (data.name)
      await Promise.all([
        db()
          .collection('hostelBlocks')
          .updateMany({ hostelId }, { $set: { hostelName: data.name, updatedAt: new Date() } }),
        db()
          .collection('hostelRooms')
          .updateMany({ hostelId }, { $set: { hostelName: data.name, updatedAt: new Date() } }),
        db()
          .collection('hostelAllocations')
          .updateMany(
            { hostelId, status: 'active' },
            { $set: { hostelName: data.name, updatedAt: new Date() } },
          ),
      ]);
    response.json({ item: serialize(result) });
  }),
);

hostelsRouter.delete(
  '/:hostelId',
  asyncHandler(async (request, response) => {
    const hostelId = id(request.params.hostelId);
    if (await db().collection('hostelAllocations').countDocuments({ hostelId }))
      return response.status(409).json({
        message: 'This hostel has allocation history. Disable it instead of deleting it.',
      });
    const result = await db().collection('hostels').deleteOne({ _id: hostelId });
    if (!result.deletedCount) return response.status(404).json({ message: 'Hostel not found.' });
    const rooms = await db()
      .collection('hostelRooms')
      .find({ hostelId })
      .project({ _id: 1 })
      .toArray();
    const roomIds = rooms.map((room) => room._id);
    await Promise.all([
      db().collection('hostelBlocks').deleteMany({ hostelId }),
      db().collection('hostelFloors').deleteMany({ hostelId }),
      db().collection('hostelRooms').deleteMany({ hostelId }),
      db()
        .collection('hostelRoomConfigurations')
        .deleteMany({ roomId: { $in: roomIds } }),
    ]);
    response.status(204).end();
  }),
);

hostelsRouter.get(
  '/structure/list',
  asyncHandler(async (request, response) => {
    const hostelId = id(request.query.hostelId, 'hostelId');
    await ensureStoredStructure(hostelId);
    const [blocks, floors] = await Promise.all([
      db().collection('hostelBlocks').find({ hostelId }).sort({ sortOrder: 1, name: 1 }).toArray(),
      db().collection('hostelFloors').find({ hostelId }).sort({ sortOrder: 1, name: 1 }).toArray(),
    ]);
    response.json({ items: blocks.map(serialize), floors: floors.map(serialize) });
  }),
);

hostelsRouter.post(
  '/blocks',
  asyncHandler(async (request, response) => {
    const data = blockSchema.parse(request.body);
    const hostelId = id(data.hostelId, 'hostelId');
    const hostel = await db().collection('hostels').findOne({ _id: hostelId });
    if (!hostel) return response.status(404).json({ message: 'Hostel not found.' });
    const existingCount = await db().collection('hostelBlocks').countDocuments({ hostelId });
    if (existingCount >= 30)
      return response.status(400).json({ message: 'A hostel can contain at most 30 blocks.' });
    const now = new Date();
    const document = {
      hostelId,
      hostelName: hostel.name,
      name: data.name,
      sortOrder: existingCount + 1,
      createdBy: id(request.admin._id),
      createdAt: now,
      updatedAt: now,
    };
    const result = await db().collection('hostelBlocks').insertOne(document);
    response.status(201).json({ item: serialize({ ...document, _id: result.insertedId }) });
  }),
);

hostelsRouter.patch(
  '/blocks/:blockId',
  asyncHandler(async (request, response) => {
    const { name } = z.object({ name: z.string().trim().min(1).max(80) }).parse(request.body);
    const blockId = id(request.params.blockId, 'blockId');
    const result = await db()
      .collection('hostelBlocks')
      .findOneAndUpdate(
        { _id: blockId },
        { $set: { name, updatedAt: new Date() } },
        { returnDocument: 'after' },
      );
    if (!result) return response.status(404).json({ message: 'Block not found.' });
    await Promise.all([
      db()
        .collection('hostelRooms')
        .updateMany({ blockId }, { $set: { blockName: name } }),
      db()
        .collection('hostelAllocations')
        .updateMany({ blockId, status: 'active' }, { $set: { blockName: name } }),
    ]);
    response.json({ item: serialize(result) });
  }),
);

hostelsRouter.delete(
  '/blocks/:blockId',
  asyncHandler(async (request, response) => {
    const blockId = id(request.params.blockId, 'blockId');
    if (await db().collection('hostelRooms').countDocuments({ blockId }))
      return response.status(409).json({ message: 'Delete the rooms in this block first.' });
    const result = await db().collection('hostelBlocks').deleteOne({ _id: blockId });
    if (!result.deletedCount) return response.status(404).json({ message: 'Block not found.' });
    response.status(204).end();
  }),
);

hostelsRouter.post(
  '/floors',
  asyncHandler(async (request, response) => {
    const data = floorSchema.parse(request.body);
    const hostelId = id(data.hostelId, 'hostelId');
    const hostel = await db().collection('hostels').findOne({ _id: hostelId });
    if (!hostel) return response.status(404).json({ message: 'Hostel not found.' });
    const now = new Date();
    const document = {
      hostelId,
      name: data.name,
      sortOrder: (await db().collection('hostelFloors').countDocuments({ hostelId })) + 1,
      createdBy: id(request.admin._id),
      createdAt: now,
      updatedAt: now,
    };
    const result = await db().collection('hostelFloors').insertOne(document);
    response.status(201).json({ item: serialize({ ...document, _id: result.insertedId }) });
  }),
);

hostelsRouter.patch(
  '/floors/:floorId',
  asyncHandler(async (request, response) => {
    const { name } = z.object({ name: z.string().trim().min(1).max(80) }).parse(request.body);
    const floorId = id(request.params.floorId, 'floorId');
    const result = await db()
      .collection('hostelFloors')
      .findOneAndUpdate(
        { _id: floorId },
        { $set: { name, updatedAt: new Date() } },
        { returnDocument: 'after' },
      );
    if (!result) return response.status(404).json({ message: 'Floor not found.' });
    await Promise.all([
      db()
        .collection('hostelRooms')
        .updateMany({ floorId }, { $set: { floorName: name } }),
      db()
        .collection('hostelAllocations')
        .updateMany({ floorId, status: 'active' }, { $set: { floorName: name } }),
    ]);
    response.json({ item: serialize(result) });
  }),
);

hostelsRouter.delete(
  '/floors/:floorId',
  asyncHandler(async (request, response) => {
    const floorId = id(request.params.floorId, 'floorId');
    if (await db().collection('hostelRooms').countDocuments({ floorId }))
      return response.status(409).json({ message: 'Delete the rooms on this floor first.' });
    const result = await db().collection('hostelFloors').deleteOne({ _id: floorId });
    if (!result.deletedCount) return response.status(404).json({ message: 'Floor not found.' });
    response.status(204).end();
  }),
);

hostelsRouter.post(
  '/rooms/manual',
  asyncHandler(async (request, response) => {
    const data = manualRoomSchema.parse(request.body);
    const location = await roomLocation(data);
    if (!location)
      return response.status(404).json({ message: 'Hostel, block or floor not found.' });
    const document = roomDocument(location, data.roomNumber, 0, request.admin._id);
    const result = await db().collection('hostelRooms').insertOne(document);
    response.status(201).json({ item: serialize({ ...document, _id: result.insertedId }) });
  }),
);

hostelsRouter.post(
  '/rooms/generate',
  asyncHandler(async (request, response) => {
    const data = generatedRoomsSchema.parse(request.body);
    const location = await roomLocation(data);
    if (!location)
      return response.status(404).json({ message: 'Hostel, block or floor not found.' });
    const roomTotal = await db()
      .collection('hostelRooms')
      .countDocuments({ hostelId: location.hostel._id });
    if (roomTotal + data.count > MAX_GENERATED_ROOMS)
      return response
        .status(400)
        .json({ message: `A hostel can contain at most ${MAX_GENERATED_ROOMS} rooms.` });
    const numbers = generateRoomNumbers(data.prefix, data.startNumber, data.count);
    const duplicates = await db()
      .collection('hostelRooms')
      .countDocuments({
        hostelId: location.hostel._id,
        roomNumber: { $in: numbers },
      });
    if (duplicates)
      return response
        .status(409)
        .json({ message: 'One or more generated room numbers already exist.' });
    const rooms = numbers.map((roomNumber, index) =>
      roomDocument(location, roomNumber, roomTotal + index + 1, request.admin._id),
    );
    await db().collection('hostelRooms').insertMany(rooms);
    response.status(201).json({ items: rooms.map(serialize) });
  }),
);

hostelsRouter.patch(
  '/rooms/:roomId/details',
  asyncHandler(async (request, response) => {
    const data = z
      .object({
        roomNumber: z.string().trim().min(1).max(40).optional(),
        isActive: z.boolean().optional(),
      })
      .parse(request.body);
    const result = await db()
      .collection('hostelRooms')
      .findOneAndUpdate(
        { _id: id(request.params.roomId, 'roomId') },
        { $set: { ...data, updatedAt: new Date(), updatedBy: id(request.admin._id) } },
        { returnDocument: 'after' },
      );
    if (!result) return response.status(404).json({ message: 'Room not found.' });
    if (data.roomNumber)
      await db()
        .collection('hostelAllocations')
        .updateMany(
          { roomId: result._id, status: 'active' },
          { $set: { roomNumber: data.roomNumber, updatedAt: new Date() } },
        );
    response.json({ item: serialize(result) });
  }),
);

hostelsRouter.delete(
  '/rooms/:roomId',
  asyncHandler(async (request, response) => {
    const roomId = id(request.params.roomId, 'roomId');
    if (await db().collection('hostelAllocations').countDocuments({ roomId }))
      return response
        .status(409)
        .json({ message: 'This room has allocation history and cannot be deleted.' });
    const result = await db().collection('hostelRooms').deleteOne({ _id: roomId });
    if (!result.deletedCount) return response.status(404).json({ message: 'Room not found.' });
    await db().collection('hostelRoomConfigurations').deleteMany({ roomId });
    response.status(204).end();
  }),
);

hostelsRouter.get(
  '/students/options',
  asyncHandler(async (request, response) => {
    const admissions = await db()
      .collection('admissions')
      .find({ status: 'submitted' })
      .sort({ submittedAt: -1 })
      .limit(500)
      .project({ applicationNumber: 1, formSnapshot: 1, responses: 1 })
      .toArray();
    response.json({
      items: admissions.map((admission) => ({
        _id: String(admission._id),
        applicationNumber: admission.applicationNumber,
        name: studentName(admission),
      })),
    });
  }),
);

hostelsRouter.get(
  '/rooms/options',
  asyncHandler(async (request, response) => {
    const filter = {};
    if (request.query.hostelId) filter.hostelId = id(request.query.hostelId, 'hostelId');
    if (request.query.blockId) filter.blockId = id(request.query.blockId, 'blockId');
    if (request.query.floorId) filter.floorId = id(request.query.floorId, 'floorId');
    if (request.query.block) filter.blockName = String(request.query.block);
    if (request.query.floor) filter.floorName = String(request.query.floor);
    const rooms = await db()
      .collection('hostelRooms')
      .find(filter)
      .sort({ hostelName: 1, blockIndex: 1, floorIndex: 1, roomIndex: 1 })
      .limit(5000)
      .toArray();
    const session = String(request.query.session || '');
    const [occupied, configurations] = session
      ? await Promise.all([
          db()
            .collection('hostelAllocations')
            .find({
              status: 'active',
              academicSession: session,
              roomId: { $in: rooms.map((room) => room._id) },
            })
            .project({ roomId: 1, bedNumber: 1 })
            .toArray(),
          db()
            .collection('hostelRoomConfigurations')
            .find({ academicSession: session, roomId: { $in: rooms.map((room) => room._id) } })
            .toArray(),
        ])
      : [[], []];
    const occupiedByRoom = new Map();
    const configurationByRoom = new Map(
      configurations.map((configuration) => [String(configuration.roomId), configuration]),
    );
    for (const allocation of occupied) {
      const key = String(allocation.roomId);
      occupiedByRoom.set(key, [...(occupiedByRoom.get(key) || []), allocation.bedNumber]);
    }
    response.json({
      items: rooms.map((room) => {
        const configuration = configurationByRoom.get(String(room._id));
        const capacity = session ? (configuration?.capacity ?? 0) : (room.capacity ?? 0);
        return serialize({
          ...room,
          ...(configuration || {}),
          _id: room._id,
          capacity,
          seater: capacity ? `${capacity}-Seater` : 'Not assigned',
          beds: bedNumbers(capacity),
          occupiedBeds: occupiedByRoom.get(String(room._id)) || [],
          configuredForSession: !!configuration,
        });
      }),
    });
  }),
);

hostelsRouter.patch(
  '/rooms/:roomId',
  asyncHandler(async (request, response) => {
    const data = roomSchema.parse(request.body);
    const roomId = id(request.params.roomId);
    const highestOccupiedBed = await db()
      .collection('hostelAllocations')
      .find({ roomId, status: 'active' })
      .sort({ bedNumber: -1 })
      .limit(1)
      .next();
    if (highestOccupiedBed && highestOccupiedBed.bedNumber > data.capacity)
      return response.status(409).json({
        message: `Bed ${highestOccupiedBed.bedNumber} is occupied. Vacate or transfer it first.`,
      });
    const result = await db()
      .collection('hostelRooms')
      .findOneAndUpdate(
        { _id: roomId },
        {
          $set: {
            ...data,
            seater: `${data.capacity}-Seater`,
            updatedBy: id(request.admin._id),
            updatedAt: new Date(),
          },
        },
        { returnDocument: 'after' },
      );
    if (!result) return response.status(404).json({ message: 'Room not found.' });
    response.json({ item: serialize(result) });
  }),
);

hostelsRouter.get(
  '/capacity/options',
  asyncHandler(async (_request, response) => {
    const [roomTypes, capacities] = await Promise.all([
      db().collection('hostelRoomConfigurations').distinct('roomType'),
      db().collection('hostelRoomConfigurations').distinct('capacity'),
    ]);
    response.json({
      seaters: [...new Set([1, 2, 3, 4, 5, ...capacities.filter(Number.isInteger)])].sort(
        (first, second) => first - second,
      ),
      roomTypes: [...new Set(['AC', 'Non-AC', ...roomTypes.filter(Boolean)])],
    });
  }),
);

hostelsRouter.put(
  '/rooms/:roomId/capacity',
  asyncHandler(async (request, response) => {
    const data = capacitySchema.parse(request.body);
    const roomId = id(request.params.roomId, 'roomId');
    const room = await db().collection('hostelRooms').findOne({ _id: roomId });
    if (!room) return response.status(404).json({ message: 'Room not found.' });
    const highestOccupiedBed = await db()
      .collection('hostelAllocations')
      .find({ roomId, academicSession: data.academicSession, status: 'active' })
      .sort({ bedNumber: -1 })
      .limit(1)
      .next();
    if (highestOccupiedBed && highestOccupiedBed.bedNumber > data.capacity)
      return response.status(409).json({
        message: `Bed ${highestOccupiedBed.bedNumber} is occupied for this session. Transfer or vacate it first.`,
      });
    const now = new Date();
    const configuration = await db()
      .collection('hostelRoomConfigurations')
      .findOneAndUpdate(
        { roomId, academicSession: data.academicSession },
        {
          $set: {
            ...data,
            roomId,
            hostelId: room.hostelId,
            updatedBy: id(request.admin._id),
            updatedAt: now,
          },
          $setOnInsert: { createdAt: now },
        },
        { upsert: true, returnDocument: 'after' },
      );
    await db()
      .collection('hostelRooms')
      .updateOne(
        { _id: roomId },
        {
          $set: {
            capacity: data.capacity,
            roomType: data.roomType,
            seater: `${data.capacity}-Seater`,
            updatedAt: now,
          },
        },
      );
    response.json({
      item: serialize({ ...room, ...configuration, _id: room._id, capacity: data.capacity }),
    });
  }),
);

hostelsRouter.get(
  '/allocations/list',
  asyncHandler(async (request, response) => {
    const filter = {};
    if (request.query.session) filter.academicSession = String(request.query.session);
    if (request.query.hostelId) filter.hostelId = id(request.query.hostelId, 'hostelId');
    if (request.query.status) filter.status = String(request.query.status);
    const items = await db()
      .collection('hostelAllocations')
      .find(filter)
      .sort({ allocatedAt: -1 })
      .limit(1000)
      .toArray();
    response.json({ items: items.map(serialize) });
  }),
);

hostelsRouter.post(
  '/allocations',
  asyncHandler(async (request, response) => {
    const data = allocationSchema.parse(request.body);
    const studentAdmissionId = id(data.studentAdmissionId, 'studentAdmissionId');
    const roomId = id(data.roomId, 'roomId');
    const [student, room] = await Promise.all([
      db().collection('admissions').findOne({ _id: studentAdmissionId, status: 'submitted' }),
      db().collection('hostelRooms').findOne({ _id: roomId, isActive: true }),
    ]);
    if (!student)
      return response.status(404).json({ message: 'Submitted student record not found.' });
    if (!room) return response.status(404).json({ message: 'Active room not found.' });
    const hostel = await db().collection('hostels').findOne({ _id: room.hostelId, isActive: true });
    if (!hostel) return response.status(409).json({ message: 'The selected hostel is disabled.' });
    const capacity = await roomCapacity(room, data.academicSession);
    if (!capacity)
      return response
        .status(409)
        .json({ message: 'Configure this room for the selected session first.' });
    if (data.bedNumber > capacity)
      return response
        .status(400)
        .json({ message: 'The selected bed does not exist in this room.' });
    const [studentAllocation, bedAllocation] = await Promise.all([
      db().collection('hostelAllocations').findOne({
        studentAdmissionId,
        academicSession: data.academicSession,
        status: 'active',
      }),
      db().collection('hostelAllocations').findOne({
        roomId,
        bedNumber: data.bedNumber,
        academicSession: data.academicSession,
        status: 'active',
      }),
    ]);
    if (studentAllocation)
      return response.status(409).json({
        message: 'This student already has an active hostel allocation for the session.',
      });
    if (bedAllocation)
      return response.status(409).json({ message: 'The selected bed is already occupied.' });
    const now = new Date();
    const document = {
      studentAdmissionId,
      studentApplicationNumber: student.applicationNumber,
      studentName: studentName(student),
      academicSession: data.academicSession,
      hostelId: room.hostelId,
      hostelName: room.hostelName,
      roomId: room._id,
      blockId: room.blockId,
      blockName: room.blockName,
      floorId: room.floorId,
      floorName: room.floorName,
      roomNumber: room.roomNumber,
      bedNumber: data.bedNumber,
      status: 'active',
      history: [],
      allocatedAt: now,
      createdBy: id(request.admin._id),
      updatedAt: now,
    };
    const result = await db().collection('hostelAllocations').insertOne(document);
    response.status(201).json({ item: serialize({ ...document, _id: result.insertedId }) });
  }),
);

hostelsRouter.patch(
  '/allocations/:allocationId/vacate',
  asyncHandler(async (request, response) => {
    const result = await db()
      .collection('hostelAllocations')
      .findOneAndUpdate(
        { _id: id(request.params.allocationId), status: 'active' },
        {
          $set: {
            status: 'vacated',
            vacatedAt: new Date(),
            vacateReason: String(request.body.reason || ''),
            updatedAt: new Date(),
          },
        },
        { returnDocument: 'after' },
      );
    if (!result) return response.status(404).json({ message: 'Active allocation not found.' });
    response.json({ item: serialize(result) });
  }),
);

hostelsRouter.patch(
  '/allocations/:allocationId/transfer',
  asyncHandler(async (request, response) => {
    const data = transferSchema.parse(request.body);
    const allocationId = id(request.params.allocationId);
    const [allocation, room] = await Promise.all([
      db().collection('hostelAllocations').findOne({ _id: allocationId, status: 'active' }),
      db()
        .collection('hostelRooms')
        .findOne({ _id: id(data.roomId, 'roomId'), isActive: true }),
    ]);
    if (!allocation) return response.status(404).json({ message: 'Active allocation not found.' });
    if (!room) return response.status(404).json({ message: 'Active destination room not found.' });
    const hostel = await db().collection('hostels').findOne({ _id: room.hostelId, isActive: true });
    if (!hostel)
      return response.status(409).json({ message: 'The destination hostel is disabled.' });
    const capacity = await roomCapacity(room, allocation.academicSession);
    if (!capacity)
      return response
        .status(409)
        .json({ message: 'Configure the destination room for this session first.' });
    if (data.bedNumber > capacity)
      return response.status(400).json({ message: 'The destination bed does not exist.' });
    const bedAllocation = await db()
      .collection('hostelAllocations')
      .findOne({
        _id: { $ne: allocationId },
        roomId: room._id,
        bedNumber: data.bedNumber,
        academicSession: allocation.academicSession,
        status: 'active',
      });
    if (bedAllocation)
      return response.status(409).json({ message: 'The destination bed is already occupied.' });
    const history = {
      hostelId: allocation.hostelId,
      hostelName: allocation.hostelName,
      roomId: allocation.roomId,
      blockId: allocation.blockId,
      blockName: allocation.blockName,
      floorId: allocation.floorId,
      floorName: allocation.floorName,
      roomNumber: allocation.roomNumber,
      bedNumber: allocation.bedNumber,
      from: allocation.allocatedAt,
      to: new Date(),
      reason: data.reason,
    };
    const result = await db()
      .collection('hostelAllocations')
      .findOneAndUpdate(
        { _id: allocationId, status: 'active' },
        {
          $set: {
            hostelId: room.hostelId,
            hostelName: room.hostelName,
            roomId: room._id,
            blockId: room.blockId,
            blockName: room.blockName,
            floorId: room.floorId,
            floorName: room.floorName,
            roomNumber: room.roomNumber,
            bedNumber: data.bedNumber,
            allocatedAt: new Date(),
            updatedAt: new Date(),
          },
          $push: { history },
        },
        { returnDocument: 'after' },
      );
    response.json({ item: serialize(result) });
  }),
);

hostelsRouter.get(
  '/overview/summary',
  asyncHandler(async (request, response) => {
    const academicSession = String(request.query.session || '');
    const hostels = await db()
      .collection('hostels')
      .find({ isActive: true })
      .sort({ name: 1 })
      .toArray();
    const hostelIds = hostels.map((hostel) => hostel._id);
    const [rooms, allocations, configurations] = await Promise.all([
      db()
        .collection('hostelRooms')
        .find({ hostelId: { $in: hostelIds }, isActive: true })
        .toArray(),
      db()
        .collection('hostelAllocations')
        .find({ status: 'active', ...(academicSession ? { academicSession } : {}) })
        .toArray(),
      academicSession
        ? db()
            .collection('hostelRoomConfigurations')
            .find({ academicSession, hostelId: { $in: hostelIds } })
            .toArray()
        : [],
    ]);
    const configurationByRoom = new Map(
      configurations.map((configuration) => [String(configuration.roomId), configuration]),
    );
    const occupiedByHostel = new Map();
    for (const allocation of allocations)
      occupiedByHostel.set(
        String(allocation.hostelId),
        (occupiedByHostel.get(String(allocation.hostelId)) || 0) + 1,
      );
    const byHostel = hostels.map((hostel) => {
      const hostelRooms = rooms.filter((room) => String(room.hostelId) === String(hostel._id));
      const beds = hostelRooms.reduce(
        (total, room) =>
          total +
          (academicSession
            ? (configurationByRoom.get(String(room._id))?.capacity ?? 0)
            : (room.capacity ?? 0)),
        0,
      );
      const occupied = occupiedByHostel.get(String(hostel._id)) || 0;
      return {
        hostelId: String(hostel._id),
        hostelName: hostel.name,
        type: hostel.type,
        rooms: hostelRooms.length,
        beds,
        occupied,
        available: Math.max(0, beds - occupied),
      };
    });
    const totals = byHostel.reduce(
      (result, item) => ({
        hostels: result.hostels + 1,
        rooms: result.rooms + item.rooms,
        beds: result.beds + item.beds,
        occupied: result.occupied + item.occupied,
        available: result.available + item.available,
      }),
      { hostels: 0, rooms: 0, beds: 0, occupied: 0, available: 0 },
    );
    response.json({ totals, byHostel });
  }),
);

function uniqueCode(name) {
  return `${slugify(name).replaceAll('-', '').slice(0, 8).toUpperCase()}-${Date.now().toString(36).toUpperCase()}`;
}

async function roomLocation(data) {
  const hostelId = id(data.hostelId, 'hostelId');
  const blockId = id(data.blockId, 'blockId');
  const floorId = id(data.floorId, 'floorId');
  const [hostel, block, floor] = await Promise.all([
    db().collection('hostels').findOne({ _id: hostelId }),
    db().collection('hostelBlocks').findOne({ _id: blockId, hostelId }),
    db().collection('hostelFloors').findOne({ _id: floorId, hostelId }),
  ]);
  return hostel && block && floor ? { hostel, block, floor } : null;
}

async function ensureStoredStructure(hostelId) {
  const hostel = await db().collection('hostels').findOne({ _id: hostelId });
  if (!hostel) return;
  if (hostel.structureMode === 'manual') return;
  const legacyRooms = await db().collection('hostelRooms').find({ hostelId }).toArray();
  if (!legacyRooms.length) {
    await Promise.all([
      db().collection('hostelBlocks').deleteMany({ hostelId }),
      db().collection('hostelFloors').deleteMany({ hostelId }),
      db()
        .collection('hostels')
        .updateOne(
          { _id: hostelId },
          { $set: { structureMode: 'manual', updatedAt: new Date() }, $unset: { wingCount: '' } },
        ),
    ]);
    return;
  }
  const now = new Date();
  const blockNames = [...new Set(legacyRooms.map((room) => room.blockName).filter(Boolean))];
  for (const [blockIndex, blockName] of blockNames.entries()) {
    const blockDocument = {
      hostelId,
      hostelName: hostel.name,
      name: blockName,
      sortOrder: blockIndex + 1,
      createdAt: now,
      updatedAt: now,
    };
    const blockResult = await db()
      .collection('hostelBlocks')
      .findOneAndUpdate(
        { hostelId, name: blockName },
        { $setOnInsert: blockDocument },
        { upsert: true, returnDocument: 'after' },
      );
    const blockId = blockResult._id;
    await db()
      .collection('hostelRooms')
      .updateMany({ hostelId, blockName }, { $set: { blockId, updatedAt: now } });
  }
  const floorNames = [...new Set(legacyRooms.map((room) => room.floorName).filter(Boolean))];
  for (const [floorIndex, floorName] of floorNames.entries()) {
    const floorDocument = {
      hostelId,
      name: floorName,
      sortOrder: floorIndex + 1,
      createdAt: now,
      updatedAt: now,
    };
    const floorResult = await db()
      .collection('hostelFloors')
      .findOneAndUpdate(
        { hostelId, name: floorName },
        { $setOnInsert: floorDocument },
        { upsert: true, returnDocument: 'after' },
      );
    await db()
      .collection('hostelRooms')
      .updateMany({ hostelId, floorName }, { $set: { floorId: floorResult._id, updatedAt: now } });
  }
  await db()
    .collection('hostels')
    .updateOne(
      { _id: hostelId },
      {
        $set: {
          blockCount: blockNames.length,
          floorCount: floorNames.length,
          plannedRoomCount: hostel.plannedRoomCount ?? legacyRooms.length,
          structureMode: 'manual',
          updatedAt: now,
        },
        $unset: { wingCount: '' },
      },
    );
}

function roomDocument(location, roomNumber, roomIndex, adminId) {
  const now = new Date();
  return {
    hostelId: location.hostel._id,
    hostelName: location.hostel.name,
    blockId: location.block._id,
    blockName: location.block.name,
    blockIndex: location.block.sortOrder,
    floorId: location.floor._id,
    floorName: location.floor.name,
    floorIndex: location.floor.sortOrder,
    roomIndex,
    roomNumber,
    roomType: 'Unassigned',
    seater: 'Not assigned',
    capacity: 0,
    isActive: true,
    createdBy: id(adminId),
    updatedBy: id(adminId),
    createdAt: now,
    updatedAt: now,
  };
}

async function roomCapacity(room, academicSession) {
  const configuration = await db()
    .collection('hostelRoomConfigurations')
    .findOne({ roomId: room._id, academicSession });
  return configuration?.capacity ?? 0;
}

function studentName(admission) {
  const fields = (admission.formSnapshot?.sections || [])
    .flatMap((section) => section.subsections || [])
    .flatMap((subsection) => subsection.fields || []);
  const exact = (names) =>
    fields.find((field) => names.includes(String(field.name).trim().toLowerCase()));
  const full = exact(['student name', 'full name', 'name']);
  if (full && admission.responses?.[full.id]) return String(admission.responses[full.id]);
  const first = exact(['first name', 'student first name']);
  const last = exact(['last name', 'surname', 'student last name']);
  const combined = [first, last]
    .map((field) => (field ? admission.responses?.[field.id] : ''))
    .filter(Boolean)
    .join(' ');
  return combined || admission.applicationNumber;
}
