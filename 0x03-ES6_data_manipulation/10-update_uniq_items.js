export default function updateUniqueItems(groceries) {
  if (groceries instanceof Map === false) {
    throw new Error('Cannot process');
  }

  for (const [key, value] of groceries) {
    if (value === 1) {
      groceries.set(key, 100);
    }
  }

  return groceries;
}
