import { Alumno } from "./Alumno.js";
import { Materia } from "./Materia.js";



let nombres = [
    'roberto',
    'juan',
    'emerson',
    'mariela',
    'angela',
    'daniel'
]

const progra = new Materia();
progra.name = 'Programacion Multiplataforma'

for (let i = 0; i < 10; i++) {

    
    const alumno = new Alumno();
    alumno.name = nombres[random()] 
    alumno.age =  random(15,30)

    alumno.addMateria(progra)
    progra.addAlumno(alumno)
    
}

function random(min = 0,max = nombres.length ) {
    
    return Math.floor(Math.random() * max) + min
}

progra.alumnos.forEach( alumno => {

    console.log(alumno.name);

});