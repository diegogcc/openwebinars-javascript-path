/*
No es programación funcional:
    for loops                           (a favor de la recursión)
    declarar variables var let          (a favor de const)
    mutaciones de objetos como fill, pop, push... 
*/


//! flujo no adecuado
let miObj = 3;
miObj = { a: 10 * miObj};
miObj = { b: 20};                   //? miObj -> { a: 30, b: 20 }

//* flujo adecuado
function calculaObj(init) {
    return { a: 10 * init, b: 20};
}
const miObj2 = calculaObj(3);       //? miObj2 -> { a: 30, b:20 }

/*
* Inmutabilidad
    se busca que haya inmutabilidad en los objetos
    una mutación es un cambio en la estructura de un objeto,
        en vez de una sustitución de la instancia
    las mutaciones pueden ser peligrosas por tener efectos secundarios
*/

let variable1 = 10;
variable1 = 20;                     //? Esto no es una mutación pues cada nuevo valor es una instancia

let variable2 = [20, 30, 50];
variable2.pop()                     //? Esto sí es una mutaciǿn porque sin asignar nuevo valor ocurre variale2 -> [20, 30]

// Es necesario usar métodos que copien el objeto y no la referencia como Array.from u Object.assing
let variable3 = [20, 30, 50];
let variable4 = variable3;
variable4.pop();                    //? Esto mutará  variable3 -> [20, 30] ya que variable4 almacena una referencia

let variable5 = [20, 30, 50];
let variable6 = Array.from(variable5);
variable6.pop();                    //? variable5 -> [20, 30, 50]           variable6 -> [20, 30]

let variable7 = [20, 30, 50];
let variable8 = [...variable7];
variable8.pop()                     //? variable7 -> [20, 30, 50]           variable8 -> [20, 30]




// El operador spread (...) es útil para copiar arrays
let array1 = [1, 4, 6];
let array2 = [...array1];

// También copia enumerables como objetos
let obj1 = { a: 5, b: 29, c: 48 };
let obj2 = {...obj1};
delete obj2.a;                      //? obj1 -> { a: 5, b: 29, c: 48 }      obj2 -> { b: 29, c: 48 }

// Y puede utilizarse para pasar arrays como parámetros
function miFuncion1(x, y, z) {
    return x + y + z;
}
const input = [2, 3, 5];
miFuncion1(...input);               // 10 

/*
 * Recursión
        Para evitar la iteración, se usa la recursión
        CON:    más difícil debugging, mucho espacio de heap (pila)
        PRO:    más legible y sencilla
*/

function factorial(n) {             //? Iteración
    var res = 1;
    for( let i = n; i >= 1; i--){
        res = res * i;
    }
    return res;
}

function factorialRecursivo(n) {    //? Recursión
    if( n<=1) return 1;
    return n * factorialRecursivo(n-1);
}


/*
*   Currying (Currificación)
        Convertir funciones de N argumentos en N funciones de 1 argumento
*/

function esDivisible(num, test){    //? SIN currying
    return test % num === 0;
}


function esDivisibleCurrying(num){  //? CON currying
    return (test) => {
        return test % num === 0;
    }
}
const esDivisiblePor3 = esDivisibleCurrying(3);
esDivisiblePor3(9)                  // true
esDivisiblePor3(10)                 // false
const esDivisiblePor5 = esDivisibleCurrying(5);
esDivisiblePor5(9)                  // false
esDivisiblePor5(10)                 // true
