// spread operator
const str = 'Digital Innovation One';
const arr = [1, 2, 3, 4];
function LogArgs(...args) {
  console.log(args);
}
LogArgs(...str);

function logArg(a, b, c) {
  console.log(a, b, c);
}
logArg(...arr);

const arr2 = [...arr, 5, 6, 7];
console.log(arr2);

// rest operator
function sum(...args) {
  return args.reduce((acc, value) => acc + value, 0);
}
console.log(sum(5, 5, 5, 2, 3, 4));

// metodo antigo
function sumOld(a, b) {
  var value = 0;
  for (var i = 0; i < arguments.length; i++) {
    value += arguments[i];
  }
  return value;
}
console.log(sumOld(5, 5, 5, 2, 3, 4));
