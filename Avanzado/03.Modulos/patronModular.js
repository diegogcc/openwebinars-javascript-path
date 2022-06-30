/*
Librerias de funciones

*/


//! 1. 
//      Se tienen unas funciones que se usarán en otras partes del código
var prom1 = 0.5

function sumaPromediada1(a, b) {
    return (a + b) * prom1;
}
function restaPromediada1(a, b) {
    return (a - b) * prom1;
}
// la variable es global y puede dar problemas. 
sumaPromediada1(5, 20);                             // 12.5
prom1 = 1;
sumaPromediada1(5, 20);                             // 25

//! 2.
//      Se puede poner la variable como parámetro
function sumaPromediada2(a, b, prom2) {
    return (a + b) * prom2;
}
function restaPromediada2(a, b, prom2) {
    return (a - b) * prom2;
}
//      mucha duplicación de código y variable común poco útil
const prom2 = 0.5;
sumaPromediada2(5, 20, prom2);                      // 12.5
sumaPromediada2(5, 11, prom2);                      // 8

//! 3.
//      Acercamiento MODULAR
const miModulo = function(){
    var prom3 = 0.5;
    return {
        sumaPromediada: function(a, b) {
            return (a + b) * prom3;
        },
        restaPromediada: function(a, b) {
            return (a - b) * prom3;
        }
    }
}
// destructuring
const { sumaPromediada, restaPromediada } = miModulo();

sumaPromediada(5, 20);                              // 12.5
prom3 = 1;                                          // ! out of scope:      la variable no va a mutar
sumaPromediada(5, 20);                              // 12.5
// intentar reasignar la variable prom3 fuera del scope no tiene resultado (incluso puede mostrar error)

//! 4.
//      Submódulos
const miModulo2 = function() {
    var prom4 = 0.5;
    return {
        financieras: {
            sumaPromediada: function(a, b){
                return (a + b) * prom4;
            },
            restaPromediada: function(a, b) {
                return (a - b) * prom4;
            }
        },
        otras: {
            obtieneFecha: function() {
                return new Date();
            }
        }
    }
}
// para poder dividir el código en funcionalidades y subfuncionalidades.