import { Alumno } from "./Alumno.js";
import { Materia } from "./Materia.js";
import { Person } from "./Person.js";




const progra = new Materia()
const robert = new Alumno()

const emerson = new Person();


robert.name = 'Robert'
robert.name = 0
robert.age = 'hola'

console.log(robert.name);
console.log(robert.age);
robert.saludar();



console.log('Clases'); 
console.log(robert);
console.log(emerson);
console.log('prototype: ',robert.constructor.name);

console.log('materia: Progra'); 
progra.addAlumno('hola')

console.log('agregando alumno robert')
progra.addAlumno(robert)

console.log('agregando Persona Emerson')
progra.addAlumno(emerson)

console.log('alumnos de progra')
console.log(progra.alumnos);

console.log('agregando materias a alumno');
robert.addMateria(progra)

console.log('agregando materias a alumno');
robert.addMateria(emerson)

console.log('materias de robert:');
console.log(robert.materias);
