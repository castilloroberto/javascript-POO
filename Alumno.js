import { Person } from "./Person.js";

export class Alumno extends Person{


    #materias = []
    #carrera = ''



    set carrera(carrera){

        this.#carrera = carrera
    
    }
    get carrera(){

        return this.#carrera

    }

    addMateria(materia){

        if ( materia.constructor.name == 'Materia') {
            
            this.#materias.push(materia)
        
        } else {

            console.warn(`No se puede agregar un valor de tipo ${ materia.constructor.name } se esperaba un atributo de tipo Materia`);

        }

    }
    get materias(){
        return this.#materias
    }

}