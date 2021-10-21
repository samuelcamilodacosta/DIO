// Symbols

const uniqueId = Symbol('Hello');
const uniqueId2 = Symbol('Hello2');
const obj = {
  [uniqueId]: 'Hello',
};

console.log(uniqueId);
console.log(uniqueId2);
console.log(uniqueId === uniqueId2);

const arr = [1, 2, 3, 4];
const it = arr[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

for (let value of arr) {
  console.log(value);
}
