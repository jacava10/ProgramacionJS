var  arreglo = [];
var j = 0;
for (var i = 0; i < 8; i++) {
    j = j + 1;
    var n_ini = prompt("Digte de " + j + " a 8 numeros"); 
     
    var peso = parseFloat(n_ini);
        n= i;
        console.log(n); 
        console.log(peso);   
        arreglo.push(peso);
        arreglo.forEach(function(elemento, indice, array)
        {
        console.log(elemento, indice)
        })
     }
let frutas = ['Manzana',"Banana","Pera"]
console.log(frutas.length);

let primero = frutas[0]

let ultimo = frutas[frutas.length - 1]

console.log(primero + " " + ultimo);

let nuevaLong = frutas.push('Naranja');
let nuevaLon2 = frutas.push('Fresa');
frutas.push('Mango');
frutas.push('Papaya');

frutas.forEach(function(elemento, indice, array)
{
 console.log(elemento, indice)
})

console.log(frutas.length);

// MAP
const numeros = [1,2,3,4,5,6];
const doble   = numeros.map(item => item * 2 );
console.log(doble);

// FILTER
const numero = [1,2,3,4,5,6];
const evens   = numero.filter(item => item % 2  == 0 );
console.log(evens);

// REDUCE
const numero3 = [1,2,3,4,5,6];
const sum   = numero3.reduce (function (result, item)
{
    return result + item;
},0
) ;
console.log(sum);



