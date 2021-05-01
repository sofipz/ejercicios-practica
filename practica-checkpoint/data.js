const {Alumno} = require('./practicaCheckpoint')

let alumno1 = new Alumno('Sofía', 1, [6, 9, 8, 9, 7]);
let alumno2 = new Alumno('Faru', 3, [1, 4, 2, 8, 7]);
let alumno3 = new Alumno('Melania', 0, [6, 5, 8, 6, 7]);
let alumno4 = new Alumno('Mila', 6, [6, 10, 3, 5, 7]);

const alumnos = [alumno1, alumno2, alumno3, alumno4];


console.log(alumno1);
// console.log(alumno2);
// console.log(alumno3);
// console.log(alumno4);

module.exports = {alumnos};

