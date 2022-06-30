/*
JS es un lenguaje de hilo único.
Se resuelve con el Event Loop.
    Cada llamada a una API genera un callback. 
    Los callbacks son procesados sólo cuando la pila de llamadas está vacía.

Promesa: acción asíncrona que puede realizarse en tiempo real, en el futuro o nunca. 
    Estados:
        PENDING
        FULFILLED   Ejecutará el callback en el bloque then()
        REJECTED    Ejecutará el callback en el bloque catch()
    
*/

function compruebaNombre(name) {
    return new Promise(function(resolve, reject){
        if (name == 'Diego') {
            resolve("Hola");
        } else {
            reject("Adiós");
        }
    });
}

compruebaNombre('Diego')
    .then(response => console.log(response))
    .catch(error => console.log(error)) 

/*
Promise.all(iterable)       se le pasa una lista de promesas y cuando se resuelvan, 
    devuelve una nueva promesa con los resultados
Promise.race(iterable)      se le pasa una lista de promesas y devuelve el resultado 
    de la primera promesa resuelta con éxito
Promise.reject(reason)      devuelve la promesa rechazada con la razón que demos
Promise.resolve(value)      devuelve la promesa resuelta con el valor que demos
*/