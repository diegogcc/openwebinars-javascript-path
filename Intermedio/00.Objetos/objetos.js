//* Maneras de declarar objetos

var persona = {
    nombre: 'Diego',
    edad: 30,

    saludar: function(){
        console.log('Hola ' + this.nombre);
    }
};

console.log(persona);           // { nombre: 'Diego', edad: 30, saludar: [Function: saludar] }
console.log(persona.nombre);    // Diego
console.log(persona.edad);      // 30
console.log(persona.saludar);   // [Function: saludar]
console.log(persona.saludar()); // Hola Diego    undefined
persona.saludar()               // Hola Diego