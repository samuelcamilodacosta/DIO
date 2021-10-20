const users = ['Guilherme', 'Pedro', 'Jennifer'];

const gender = {
  MAN: Symbol('M'),
  WOMAN: Symbol('W'),
};
const persons = [
  {
    name: 'Guilherme',
    age: 26,
    gender: gender.MAN,
  },
  {
    name: 'Pedro',
    age: 43,
    gender: gender.MAN,
  },
  {
    name: 'Jennifer',
    age: 18,
    gender: gender.WOMAN,
  },
];

//Retonrnar a quantidade de itens no array
console.log('Itens: ', persons.length);

//Verificar se é array
console.log('A variável persons é um array: ', Array.isArray(persons));

//Iterar os itens do array
persons.forEach((person, index, arr) => {
  console.log(`Nome: ${person.name} index: ${index}`, arr);
});

//Filtrar array
const mens = persons.filter((person) => person.gender === gender.MAN);
console.log('\nNova lista apenas com homens: ', mens);

//Retornar um novo
const personsWithCourse = persons.map((person) => {
  person.course = 'Introdução ao JavaScript';
  return person;
});

console.log('\nPessoas com a adição do course: ', personsWithCourse);

//Transformar um array em outro tipoo
const totalAge = persons.reduce((age, person) => {
  age += person.age;
  return age;
}, 0);

console.log('\nSoma de idade das pessoas', totalAge);
