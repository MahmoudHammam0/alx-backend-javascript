import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promise1 = signUpUser(firstName, lastName);
  const promise2 = uploadPhoto(fileName);
  return Promise.allSettled([promise1, promise2]).then((data) => {
    const result = [];
    data.forEach((promise) => {
      if (promise.status === 'fulfilled') {
        result.push({ status: promise.status, value: promise.value });
      } else {
        result.push({ status: promise.status, value: `${promise.reason}` });
      }
    });
    return result;
  });
}
