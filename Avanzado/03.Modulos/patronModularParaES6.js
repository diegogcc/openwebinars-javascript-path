/*
* Estructura Básica
    módulo nativo:  script que expota funciones o clases con la palabra export 
    los navegadores optimizan las importaciones 

*/

const prom1 = 0.5;                                  //? miModulo.mjs

function sumaPromediada(a, b) {
    return (a + b) * prom1;
}
function restaPromediada(a, b) {
    return (a - b) * prom1;
}
export {
    sumaPromediada,
    restaPromediada
}


import {                                            //? main.js
    sumaPromediada,
    restaPromediada
} from './patronModularParaES6.mjs'

sumaPromediada(10, 10);                             // 10
restaPromediada(20, 10);                            // 5

//! Importar el módulo localmente da alerta de seguridad.
//!     Siempre hay que hostearlo en un servidor.

// También se puede exportar una sola cosa del mǿdulo con 'default'
export default function sumaPromediada1(a, b){
    //
}

import sumaPromediada1 from './patronModularParaES6.mjs'