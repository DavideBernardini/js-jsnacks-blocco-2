// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

var numeri = [];
var somma = 0;

// ciclo for
// for (var i = 0; i < 5; i++) {
//     numeri.push(parseInt(prompt("Inserisci un numero")));
//     somma += numeri[i];
// }

// ciclo while
var i = 0;
while (i < 5) {
    numeri.push(parseInt(prompt("Inserisci un numero")));
    somma += numeri[i];

    i++
}

console.log(somma);