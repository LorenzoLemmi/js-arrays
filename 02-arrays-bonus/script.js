const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = [];
let currentTeacher;
for (let i = teachers.length - 1; i >= 0 ; i--) {
  currentTeacher = teachers [i];
  reversedTeachers.push(currentTeacher);
}

reversedTeachers2 = teachers.reverse();

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];
for (let i = 0; i < teachers.length; i++) {
  currentTeacher = teachers [i];
  if (currentTeacher.length >= 5) {
    longNames.push(currentTeacher);
  }
}

const longNames2 = teachers.filter((word) => word.length >= 5);

// 3. Rimuovi 'Ed' dall'array teachers
