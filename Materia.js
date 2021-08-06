export class Materia {

    #alumnos = []
    #name = ''



    addAlumno(alumno){
        
        if (alumno.constructor.name == 'Alumno') {

            this.#alumnos.push(alumno)
        
        } else {

            console.warn(`No se puede agregar un valor de tipo ${ alumno.constructor.name } se esperaba un parametro de tipo Alumno`);

        }


    }

    get alumnos(){

        return this.#alumnos
    
    }

    get name(){

        return this.#name
    
    }

    set name(name){

        if (typeof(name) == 'string') {
            this.#name = name
        }

    }
}