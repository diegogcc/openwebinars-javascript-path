console.log(Math.SQRT1_2);

console.log(Math.min(1, 2, 4, 16, -23, 22, 0, -10.1));

var aleatorio = Math.random();
console.log(aleatorio);

function randomWithRange(range){
    console.log(Math.round(Math.random() * range));
}

randomWithRange(21);        // 5
randomWithRange(210);       // 64
randomWithRange(2100);      // 1979