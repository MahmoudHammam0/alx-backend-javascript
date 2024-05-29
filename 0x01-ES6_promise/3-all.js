import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  const promise1 = uploadPhoto();
  const promise2 = createUser();
  return Promise.all([promise1, promise2]).then((data) => {
    console.log(data[0].body, data[1].firstName, data[1].lastName);
  })
    .catch(() => {
      console.log('Signup system offline');
    });
}
