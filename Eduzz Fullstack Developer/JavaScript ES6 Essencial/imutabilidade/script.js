const user = {
  name: 'Samuel',
  lastName: 'Camilo Costa',
};
function getUserWithFullName(user) {
  return {
    ...user,
    fullName: `${user.name} ${user.lastName}`,
  };
}

const userWithFullName = getUserWithFullName(user);
console.log(userWithFullName, user);

const students = [
  {
    name: 'Graça',
    grade: 6,
  },
  {
    name: 'Jennifer',
    grade: 4,
  },
  {
    name: 'Paul',
    grade: 10,
  },
];

function getApprovedStudents(studentsList) {
  return studentsList.filter((student) => student.grade >= 7);
}

console.log('Alunos Aprovados: ');
console.log(getApprovedStudents(students));

console.log('\nLista de Alunos: ');
console.log(students);
