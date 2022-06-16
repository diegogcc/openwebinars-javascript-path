/*
Muestra los números pares de [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
*/

var a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

for (var i = 0; i < a.length; i++){
    if (a[i] % 2 === 0){
        console.log(a[i])
    }
}

/*
Suma todos los números del array
*/
total = 0;
for (var i = 0; i < a.length; i ++){
    total += a[i];
}
console.log(total);