export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  const array = [];
  for (const fruit of set) {
    if (fruit.includes(startString)) {
      const str = fruit.slice(startString.length);
      array.push(str);
    }
  }

  return array.join('-');
}
