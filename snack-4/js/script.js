// Crea un array di numeri interi
// e fai la somma di tutti gli elementi che sono in posizione (indice dell'array) dispari

var numeri = [1, 5, 6, 8, 7, 19, 28, 3, 52, 31, 2, 9];
var somma = 0;

for (var i = 0; i < numeri.length; i++) {

    if (i % 2 == 1) {
        somma += numeri[i]
    }

}

console.log(somma);

