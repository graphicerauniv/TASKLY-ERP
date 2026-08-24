import test from 'node:test';
import assert from 'node:assert/strict';
import { bedNumbers, generateRoomNumbers } from '../src/services/hostel-structure.js';

test('creates room bed numbers from configured capacity', () => {
  assert.deepEqual(bedNumbers(3), [1, 2, 3]);
});

test('generates a manual floor room sequence with a reusable prefix', () => {
  assert.deepEqual(generateRoomNumbers('A-', 101, 4), ['A-101', 'A-102', 'A-103', 'A-104']);
});
