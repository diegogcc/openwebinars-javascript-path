/*
*   OOP:
        Objetos son entidades con un estado, comportamiento e identidad.
        Atributos -->   estado
        Métodos -->     comportamientos

        Instancia:
            Una identidad única de un objeto
        Herencia:   
            Un objeto puede heredar métodos y atributos de un objeto superior (i.e. Coche hereda de Vehículo)
    
    "class" se usa desde ES6
    una clase en realidad es una función (que no se coloca en memoria)
*/

class Vehiculo {
    constructor(propulsion) {
        this.propulsion = propulsion;
        this.encendido = false;
        this.velocidad = 0;
        this.fuel = 0;
    }
    arrancar() {
        if(this.fuel > 0){
            this.encendido = true;
        }
    }
    repostar() {
        this.fuel = 100;
    }
}

// _____ Es igual a hacer lo siguiente:

const Vehiculo2 = function(propulsion) {
    this.propulsion = propulsion;
    this.encendido = false;
    this.velocidad = 0;
    this.fuel = 0;
}
Vehiculo2.prototype.arrancar = function(){
    if(this.fuel > 0){
        this.encendido = true;
    }
}
Vehiculo2.prototype.repostar = function(){
    this.fuel = 100;
}

// Herencia

class Coche extends Vehiculo{
    constructor(propulsion, puertas){
        super(propulsion);
        this.puertas = puertas;
        this.abierto = false;
    }
    abrir(){
        this.abierto = true;
    }
    cerrar(){
        this.abierto = false;
    }
}

const mazda = new Coche('gasolina', 5);
mazda.abierto;                                  // false
mazda.abrir();
mazda.abierto;                                  // true
mazda.velocidad;                                // 0