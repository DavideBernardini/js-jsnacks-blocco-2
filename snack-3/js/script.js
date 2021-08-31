// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
// lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

var nomi = ["Mario", "Luigi", "Claudio", "Franco", "Giuseppe"];
var cognomi = ["Rossi", "Verdi", "Bianchi", "Neri", "Gialli"];
var listaInvitati = [];

for (var i = 0; i < 3; i++) {
   
   listaInvitati.push(nomi[Math.floor(Math.random() * nomi.length)] + " " + cognomi[Math.floor(Math.random() * cognomi.length)]);

}

console.log("Invitati alla festa: " + listaInvitati);

