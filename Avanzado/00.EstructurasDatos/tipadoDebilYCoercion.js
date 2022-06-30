/* 
* TIPADO DINÁMICO
*/

let variable = "Hola";
typeof variable;     // string

let variable2 = 25;
typeof variable2;    // number

let variable3 = new Date();
typeof variable3;    // object

let variable4;
typeof variable4;   // undefined

let variable5 = () => {};
typeof variable5;   // function

//Coerción: convertir und ato de un tipo a otro tipo distinto

//* Coerción explícita (de tipo String)
String(123)         // '123'
String (-14.4)      // '-14.4'
String(null)        // 'null'
String(true)        // 'true'

let num = 123;
num.toString();     // '123'

//* Coerción implicita (de String): String + otro tipo
123 + '';           // '123'
'' + true;          // 'true'



//* Coerción explícita (Boolean)
Boolean('')         // false
Boolean(0)          // false
Boolean(NaN)        // false
Boolean(null)       // false
Boolean(-0)         // false
Boolean(undefined)  // false            
Boolean(1)          // true

//* Coerción implícita (Boolean)
if (2) {/*...*/};   // se evalúa true
!2                  // false
2 || false          // se evalúa true, retorna 2



//* Coerción expĺícita (Number)
Number(null)        // 0            
Number(undefined)   // NaN
Number(true)        // 1
Number(false)       // 0
Number(" 10 ")      // 10
Number("-19.45")    // -19.45
Number("\n")        // 0
Number("123abc")    // NaN
Number(123)         // 123

//* Coerción implícita (Number)
+'123'              // 123
123 == '123'        // true
4 > '5'             // true
5/null              // Infinity
true | 0            // 1

//! Evitar la coerción de tipos
// usando ===
0 == []             // true
0 === []            // false
0 == ''             // true
0 === ''            // false
1 != '1'            // false
1 !== '1'           // true
