/*
Callbacks y errores
*/

const miFunction = (val) => {
    return new Promise((resolve, reject) => {
        if (val) {
            resolve('El valor es true')
        } else {
            reject('El valor es false')
        }
    })
}

const funcExito = (res) => {
    console.log(res);
};
const funcError = (res) => {
    console.error(res);
};

miFunction(true).then(funcExito, funcError);        // mensaje de éxito por console.log
miFunction(true).then(funcExito).catch(funcError);  // mensaje de éxito por console.log

miFunction(false).then(funcExito, funcError);       // mensaje de error por console.log
miFunction(false).then(funcExito).catch(funcError); // mensaje de error por console.log

/* 
* Nested Promises
*/

// SECUENCIAL
new Promise(function(resolve, reject){
    setTimeout(() => resolve(1), 1000);
}).then((result) => {
    alert(result);                          // 1
    return result * 2;
}).then((result) => {
    alert(result);                          // 2
    return result * 2;
}).then((result) => {
    alert(result);                          // 4
    return result * 2; 
})

// No encadenamiento: llamar la misma promesa varias veces
let promise1 = new Promise(function(resulve, reject){
    setTimeout(() => resolve(1), 1000);
});

promise1.then((result) => {
    alert(result);                          // 1
    return result * 2;
});
promise1.then((result) => {
    alert(result);                          // 1
    return result * 2;
});
promise1.then((result) => {
    alert(result);                          // 1
    return result * 2;
});



// Permitir devolver promesas de manera explícita nos habilita para crear
//      cadenas de accinoes asíncronas

new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
}).then((result) => {
    alert(result);                          // 1
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(result * 2), 1000);
    });
}).then((result) => {
    // Este callback esperará 1 segundo a ejecutarse
    alert(result);                          // 2
    return result * 2;
}).then((result) => {
    alert(result);                          // 4
    return result * 2;
})


/* 
*Errores y gestión

un error capturado en el catch se considera manejado y el callback
no lanza un nuevo error. (continua la ejecución)
*/
new Promise((resolve, reject) => {
    throw new Error('Error!');
}).catch((error) => {
    alert("El error ha sido manejado con éxito");
}).then(() => alert("Este callback se ejecuta"));

// Un callbak de error con un nuvo error será manejado por el siguiente catch
new Promise((resolve, reject) => {
    throw new Error("Error!");
}).catch((error) => {
    throw error;
}).then(() => alert("Este callback no se ejecuta"))
.catch((error) => {
    alert("Este callback se ejecuta con el error");
});
