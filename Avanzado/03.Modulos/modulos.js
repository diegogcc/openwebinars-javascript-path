/*
* MODULO
    script autocontenido
    scope propio

    PRO:    
        mantenibilidad
        reusabilidad

    Implementación de módulos nativos de JS:
        Common.js
        Require.js
        UMD
        Babel
        Webpack
*/


//! Ejemplo en Common.js
function miModulo() {                           //? export
    this.hola = function() {
        return 'hola!';
    }
    this.adios = function() {
        return 'adios!';
    }
}
module.exports = miModulo;


var miModulo = require('miModulo');             //? import
var instancia = new miModulo();
instancia.hola();                               // hola!
instancia.adios();                              // adios!



//! Ejemplo en AMD
define([], function(){
    return{
        hola: function() {
            console.log('hola!');
        },
        adios: function() {
            console.log('adios!');
        }
    };
});
// módulos cargados asíncronamente
// módulos no tienen que ser un objeto (como en Common.js)

