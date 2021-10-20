const arr = [1, 2, 3, 4, 5];
console.log(arr.map((value) => value * 2));
console.log(arr.map((value) => [[value * 2]]));
console.log(arr.join('-'));

const idades = [20, 35, [12, 40, [70, 40]]];
console.log(idades);
console.log(idades.flat(2));

const array = [1, 3, 3, 4, 3, 4];

const firstIndexOfItem = array.indexOf(4);
console.log(firstIndexOfItem);
const lastIndexOfItem = array.lastIndexOf(4);
console.log(lastIndexOfItem);
const hasItemOne = array.includes(1);
console.log(hasItemOne);
const hasItemTwo = array.includes(2);
console.log(hasItemTwo);
const hasSomeEvenNumber = array.some((value) => value % 2 === 0); //Verifica se o array tem núm par
console.log(hasSomeEvenNumber);
const valorTotal = array.reduce((total, value) => (total += value), 0);
console.log(valorTotal);
