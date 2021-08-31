// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

var lista1 = [];
var lista2 = [];

var lunghezzaLista1 = Math.floor(Math.random() * 15) + 1;
var lunghezzaLista2 = Math.floor(Math.random() * 15) + 1;

for ( var i = 0; i < lunghezzaLista1; i++) {
    lista1.push(Math.floor(Math.random() * 100))
}
for ( var i = 0; i < lunghezzaLista2; i++) {
    lista2.push(Math.floor(Math.random() * 100))
}


while (lista2.length < lista1.length) {
    lista2.push(Math.floor(Math.random() * 100));
}
while (lista1.length < lista2.length) {
    lista1.push(Math.floor(Math.random() * 100));
}
console.log(lista1)
console.log(lista2)