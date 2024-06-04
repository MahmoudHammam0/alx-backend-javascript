export default function cleanSet(set, startString) {
  if (startString === undefined || startString.length === 0) {
    return '';
  }
  const array = [];
  for (const fruit of set) {
    if (fruit.startsWith(startString)) {
      const str = fruit.slice(startString.length);
      array.push(str);
    }
  }

  return array.join('-');
}
