export default function signUpUser(firstName, lastName) {
  const simplePromise = Promise.resolve({ firstName, lastName });
  return (simplePromise);
}
