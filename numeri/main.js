// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer e dichiariamo chi ha vinto.

//dichiaro variabili
var sceltacpu, sceltautente, numeroutente, numerocpu;

//utente sceglie tra pari e dispari
sceltautente = prompt('Scegli pari o dispari');
console.log(sceltautente);

if (sceltautente == 'pari') {
  sceltacpu = 'dispari';
}
if (sceltautente == 'dispari') {
  sceltacpu = 'pari';
}

//utente sceglie un numero
numeroutente = parseInt(prompt('Scegli un numero da 1 a 5'));
console.log('numeroutente' + numeroutente);


//cpu genera un numero random

numerocpu = Math.floor(Math.random() * (5 + 1));
console.log('numerocpu' + numerocpu);


//dichiariamo chi ha vinto
function paridispari() {
  if (numeroutente > numerocpu) {
    document.write(sceltautente);
  } else if (numeroutente === numerocpu) {
    document.write('pareggio');
  } else {
    document.write(sceltacpu);
  }
}

paridispari();
