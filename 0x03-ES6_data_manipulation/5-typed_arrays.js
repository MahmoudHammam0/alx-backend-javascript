export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const array = new Int8Array(buffer);

  array[position] = value;

  return new DataView(buffer);
}
