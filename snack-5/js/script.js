// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

var lista1 = [2, 4, 6, 7, 9, 4, 6, 4, 9];
var lista2 = [3, 4, 6, 9, 7, 3];

while (lista2.length < lista1.length) {
    lista2.push(Math.floor(Math.random() * 10 + 1));
}