export default function cleanSet(set, startString) {
  if (startString === undefined || startString.length === 0) {
    return '';
  }
  const array = [...set].filter((fruit) => (fruit !== undefined ? fruit.startsWith(startString) : ''))
    .map((fruit) => (fruit !== undefined ? fruit.slice(startString.length) : ''));

  return array.join('-');
}
