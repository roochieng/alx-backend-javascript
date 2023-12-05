// Function that returns a new ArrayBuffer with
// an Int8 value at a specific position.

export default function createInt8TypedArray (length, position, value) {
  if (position >= length) throw Error('Position outside range');
  const buffer = new ArrayBuffer(length);
  const view = new Int8Array(buffer);
  view.set([value], position);
  return new DataView(buffer);
}
