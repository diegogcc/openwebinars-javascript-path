var primerArray = [
    'Primer elemento', 
    11,
    true,
    NaN,
    {key: 'otro elemento'}
];

var array2 = new Array(5);

var array3 = new Array('rojo', 'azul','verde');

console.log(array3[2]);         // verde

array3.push('amarillo');
console.log(array3);            //[ 'rojo', 'azul', 'verde', 'amarillo' ]

console.log(array3[5])          // undefined


// * BUCLES / LOOPS

var colores = ['verde', 'negro', 'azul'];

for (var i = 0;   i < colores.length;   i++){
    console.log(colores[i])
}
