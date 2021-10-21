//generators
function* hello() {
  console.log('Hello');
  yield 1;
  console.log('From');
  const value = yield 2;
  console.log(value);
}

const it = hello();
console.log(it.next());
console.log(it.next());
console.log(it.next('Outside!'));
