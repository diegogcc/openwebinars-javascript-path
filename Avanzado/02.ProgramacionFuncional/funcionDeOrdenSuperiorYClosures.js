/*
* Función de primera clase
    pueden ser tratadas como una variable
    puede ser pasada como argumento, retornada por otra función o asignada a una variable
*/

const doble = function(x) {
    return x * 2;
}

// se ejecuta la función asociada a la variable 
doble(22)                                           // 44

const aplicarFuncion = function(func, x) {
    return func(x);
}

aplicarFuncion(doble, 5);                           // 10




//! Se puede crear una función que retorne otra función
const creaFuncion = function(x) {
    return () => {return x * 2}
}
const retorno = creaFuncion(4)
retorno()                                           // 8
creaFuncion(4)()                                    // 8


/*
* Closure
    se preserva el scope interno entre ejecuciones
*/

const sinClosure = () => {                          //? sin closure
    let counter = 0;
    return ++counter;
}
console.log(sinClosure())                           // 1
console.log(sinClosure())                           // 1
console.log(sinClosure())                           // 1


const conClosure = () => {                          //? con closure
    let counter = 0;
    return () => ++counter;
}
const incrementar = conClosure()
console.log(incrementar())                          // 1
console.log(incrementar())                          // 2
console.log(incrementar())                          // 3

//----

const closure = () => {
    let nombre = 'No hay nombre';
    return {
        setNombre: (valor) => {nombre = valor},
        getNombre: () => nombre
    } 
}
const persona = closure()

console.log(persona.nombre)                         // undefined
console.log(persona.getNombre())                    // No hay nombre
console.log(persona.setNombre('diego'))     
console.log(persona.nombre)                         // undefined
console.log(persona.getNombre())                    // diego

/*
* Función de orden superior
    Abstracción de tareas comunes para funciones
    Recive las funciones que tienen una funcionalidad común (y otras funcionalidades distintas)
        e Implementar la funcionalidad común y luego llama a la correspnodiente
*/

const imprimeHolaEnBucle = (n) => {
    for (let i = 0; i < n; i++) {
        console.log('Hola');
    }
}

const imprimeAdiosEnBucle = (n) => {
    for (let i = 0; i < n; i++) {
        console.log('Adios');
    }
}
//! 
const imprimeHola = () => {
    console.log('Hola')
}
const hazBucle = (b, action) => {
    for (let i = 0; i < n; i++) {
        action();
    }
}
hazBucle(2, imprimeHola)                        // == imprimeHolaEnBucle(2)

// ----
const mayorQue = (n) => {
    return (m) => m > n;
}

const mayorQue10 = mayorQue(10);
const mayorQue15 = mayorQue(15);

mayorQue10(5);                                  // false
mayorQue10(12);                                 // true

// ----
const agregaContador = (func) => {
    let counter = 0;
    return (...arguments) =>{
        counter++;
        console.log(`ejecutando ${counter} vez`);
        return func(...arguments);
    }
}
 const sumaContada = agregaContador((x, y) => x + y);
 const restaContada = agregaContador((x, y) => x - y);

 sumaContada(1, 2);                             // ejecutando 1 vez     3
 sumaContada(4, 5);                             // ejecutando 2 vez     9
 restaContada(20, 10);                          // ejecutando 1 vez     10