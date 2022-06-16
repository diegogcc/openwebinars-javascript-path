/*
Imaginemos que vamos ad esarrollar un juego, y debemos crear un
objeto 'Jugador' que tenga una propiedad 'fuerza' que inicialmente tenga
el valor 1, un método 'incrementarFuerza' que nos permita incrementar
en 1 la fuerza del jugador y un método 'consultarFuerza' que nos muestre un 
mensaje con la fuerza del jugador.
*/

function Jugador() {
    this.fuerza= 1;
    this.incrementarFuerza = function(){
        this.fuerza += 1;
    },
    this.consultarFuerza = function(){
        console.log('Tu fuerza es de ' + this.fuerza);
    }
}

var jugador1 = new Jugador();
jugador1.consultarFuerza();     // Tu fuerza es de 1
jugador1.incrementarFuerza();
jugador1.incrementarFuerza();
jugador1.consultarFuerza();     // Tu fuerza es de 3