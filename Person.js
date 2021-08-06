export class Person{
    
    #name = ''
    #age = 0

    get age() {

        return this.#age
    
    }
    
    set age(age){

        if (typeof(age) == 'number') {
            
            this.#age = age
        
        } else {

            console.warn(`No se puede asignar un valor de tipo ${ typeof( age ) } a el atributo age de tipo number`);


        }

    }

    get name(){

        return this.#name
    
    }

    set name(name){

        if (typeof(name) == 'string') {
            
            this.#name = name
        
        } else {

            console.warn(`No se puede asignar un valor de tipo ${ typeof( name ) } a el atributo name de tipo string`);
        }
    }
    
    saludar(){

        console.log(`Hola mi nombre es ${this.name}`);
    
    }

    static className = 'Person class name: person' 
    
    static desc() {
        return "Person Desc: Una clase persona que contiene un nombre y edad"
    }



}