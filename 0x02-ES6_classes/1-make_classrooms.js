import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const array = [19, 20, 34];
  const res = [];
  for (const num of array) {
    const inst = new ClassRoom(num);
    res.push(inst);
  }

  return (res);
}
