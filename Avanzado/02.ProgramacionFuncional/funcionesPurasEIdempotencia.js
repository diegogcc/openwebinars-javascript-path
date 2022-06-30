/*
Programación Funcional: 
uso de funciones matemáticas para resolver todos los problemas

* Función pura
    funciones que no tienen ningún tipo de efecto secundario
    i.e     La función no altera variables globales
            Los resultados dependen únicamente de los parámetros de entrada

    F1 (F2 (x, y)) == F2 ( F1(x, y))

    El resultado de una función pura se puede eliminar sin afectar el resto del programa
    Una llamada con los mismos parámetros siempre retornan el mismo resultado (determinista)

*/

const dobleNumero = (x) => {
    return x * 2;
}
const mitadNumero = (x) => {
    return x / 2;
}
dobleNumero(mitadNumero(4));            // 4
mitadNumero(dobleNumero(4));            // 4
//! puras

const cuadradoNumero = (x) => {
    return Math.pow(x, 2);
}
dobleNumero(cuadradoNumero(4));         // 32
cuadradoNumero(dobleNumero(4));         // 64


/*
* Función idempotente
    Cuando el resultado de llamarla varias veces es igual que llamarla una sola vez.
    F( F (x)) == F (x)
*/

//! pura idempotente
const hacerPar = (x) => {
    if (x % 2 !== 0) {
        return x + 1;
    } else {
        return x;
    }
}
hacerPar(5);                            // 6
hacerPar(hacerPar(hacerPar(5)));        // 6

//! pura no idempotente
const doble = (x) => {
    return x * 2;
}
doble(5);                               // 10
doble(doble(5));                        // 20

//! no pura idempotente
const objecto = { a: 5};
const hacerPar2 = () => {
    const { a } = objecto;
    if (a % 2 !== 0) {
        objecto.a = a + 1;
    }
}
hacerPar2();                            // objeto.a = 6
hacerPar2(hacerPar2());                 // objeto.a = 6