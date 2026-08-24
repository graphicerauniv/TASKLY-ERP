export function bedNumbers(capacity) {
  return Array.from({ length: capacity }, (_, index) => index + 1);
}

export function generateRoomNumbers(prefix, startNumber, count) {
  return Array.from({ length: count }, (_, index) => `${prefix}${startNumber + index}`);
}
