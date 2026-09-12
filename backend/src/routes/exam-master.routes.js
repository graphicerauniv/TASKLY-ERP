import express from 'express';
import { z } from 'zod';
import { db, id, serialize } from '../db.js';
import { asyncHandler } from '../lib/async-handler.js';

export const examMasterRouter = express.Router();

const objectIdString = z.string().trim().min(1);
const commonSchema = z.object({
  name: z.string().trim().min(1).max(160),
  isActive: z.boolean().optional().default(true),
});
const schemas = {
  buildings: commonSchema,
  floors: commonSchema.extend({
    buildingId: objectIdString,
    floorNumber: z.coerce.number().int().min(-10).max(300),
  }),
  rooms: commonSchema.extend({
    buildingId: objectIdString,
    floorId: objectIdString,
    roomNumber: z.string().trim().min(1).max(50),
    capacity: z.coerce.number().int().min(1).max(10000),
  }),
};
const collections = {
  buildings: 'examBuildings',
  floors: 'examFloors',
  rooms: 'examRooms',
};

function definition(resource) {
  const schema = schemas[resource];
  const collection = collections[resource];
  if (!schema || !collection) {
    const error = new Error('Exam Master resource was not found.');
    error.status = 404;
    throw error;
  }
  return { schema, collection };
}

function dataForStorage(data) {
  const output = { ...data };
  for (const field of ['buildingId', 'floorId'])
    if (output[field]) output[field] = id(output[field], field);
  return output;
}

async function resolveHierarchy(resource, data) {
  const output = { ...data };
  if (resource === 'buildings') return output;
  const building = await db()
    .collection('examBuildings')
    .findOne({ _id: id(data.buildingId, 'buildingId'), isActive: true });
  if (!building) throw Object.assign(new Error('Select an active exam building.'), { status: 400 });
  output.buildingName = building.name;
  if (resource === 'floors') return output;
  const floor = await db()
    .collection('examFloors')
    .findOne({
      _id: id(data.floorId, 'floorId'),
      buildingId: building._id,
      isActive: true,
    });
  if (!floor)
    throw Object.assign(new Error('The selected floor does not belong to this building.'), {
      status: 400,
    });
  output.floorName = floor.name;
  output.floorNumber = floor.floorNumber;
  return output;
}

function duplicateFilter(resource, data) {
  if (resource === 'buildings') return { name: data.name };
  if (resource === 'floors')
    return {
      buildingId: id(data.buildingId, 'buildingId'),
      floorNumber: data.floorNumber,
    };
  return { floorId: id(data.floorId, 'floorId'), roomNumber: data.roomNumber };
}

examMasterRouter.get(
  '/bootstrap',
  asyncHandler(async (request, response) => {
    void request;
    const [buildings, floors, rooms] = await Promise.all(
      Object.values(collections).map((collection) =>
        db()
          .collection(collection)
          .find({})
          .sort({ name: 1, floorNumber: 1, roomNumber: 1 })
          .toArray(),
      ),
    );
    response.json({
      buildings: buildings.map(serialize),
      floors: floors.map(serialize),
      rooms: rooms.map(serialize),
    });
  }),
);

examMasterRouter.get(
  '/:resource',
  asyncHandler(async (request, response) => {
    const { collection } = definition(request.params.resource);
    const items = await db()
      .collection(collection)
      .find({})
      .sort({ name: 1, floorNumber: 1, roomNumber: 1 })
      .toArray();
    response.json({ items: items.map(serialize) });
  }),
);

examMasterRouter.post(
  '/:resource',
  asyncHandler(async (request, response) => {
    const resource = request.params.resource;
    const { schema, collection } = definition(resource);
    const parsed = schema.parse(request.body);
    if (await db().collection(collection).findOne(duplicateFilter(resource, parsed)))
      return response.status(409).json({ message: 'This exam master record already exists.' });
    const data = await resolveHierarchy(resource, parsed);
    const now = new Date();
    const document = {
      ...dataForStorage(data),
      createdAt: now,
      updatedAt: now,
      createdBy: id(request.admin._id),
    };
    const result = await db().collection(collection).insertOne(document);
    response.status(201).json({ item: serialize({ ...document, _id: result.insertedId }) });
  }),
);

examMasterRouter.patch(
  '/:resource/:itemId',
  asyncHandler(async (request, response) => {
    const resource = request.params.resource;
    const { schema, collection } = definition(resource);
    const itemId = id(request.params.itemId, 'itemId');
    const current = await db().collection(collection).findOne({ _id: itemId });
    if (!current)
      return response.status(404).json({ message: 'Exam master record was not found.' });
    const parsed = schema.parse({ ...serialize(current), ...request.body });
    const duplicate = await db().collection(collection).findOne(duplicateFilter(resource, parsed));
    if (duplicate && String(duplicate._id) !== String(itemId))
      return response.status(409).json({ message: 'This exam master record already exists.' });
    const data = await resolveHierarchy(resource, parsed);
    await db()
      .collection(collection)
      .updateOne({ _id: itemId }, { $set: { ...dataForStorage(data), updatedAt: new Date() } });
    if (resource === 'buildings')
      await Promise.all(
        ['examFloors', 'examRooms'].map((dependentCollection) =>
          db()
            .collection(dependentCollection)
            .updateMany(
              { buildingId: itemId },
              { $set: { buildingName: data.name, updatedAt: new Date() } },
            ),
        ),
      );
    if (resource === 'floors')
      await db()
        .collection('examRooms')
        .updateMany(
          { floorId: itemId },
          {
            $set: {
              floorName: data.name,
              floorNumber: data.floorNumber,
              updatedAt: new Date(),
            },
          },
        );
    response.json({ item: serialize(await db().collection(collection).findOne({ _id: itemId })) });
  }),
);

examMasterRouter.delete(
  '/:resource/:itemId',
  asyncHandler(async (request, response) => {
    const resource = request.params.resource;
    const { collection } = definition(resource);
    const itemId = id(request.params.itemId, 'itemId');
    const dependencies = {
      buildings: [
        ['examFloors', 'buildingId'],
        ['examRooms', 'buildingId'],
      ],
      floors: [['examRooms', 'floorId']],
      rooms: [],
    };
    for (const [dependentCollection, field] of dependencies[resource])
      if (
        await db()
          .collection(dependentCollection)
          .findOne({ [field]: itemId })
      )
        return response.status(409).json({
          message: 'Remove the dependent Exam Master records before deleting this record.',
        });
    const result = await db().collection(collection).deleteOne({ _id: itemId });
    if (!result.deletedCount)
      return response.status(404).json({ message: 'Exam master record was not found.' });
    response.json({ deleted: true });
  }),
);
