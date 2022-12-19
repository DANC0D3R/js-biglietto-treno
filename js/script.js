// Richiesta inserimento età
const age = prompt("Inserisci la tua età");

// Richiesta inserimento numero dei chilometri da percorrere
const km = prompt("Inserisci il numero dei chilometri da percorrere");

// Calcola il prezzo del biglietto in base ai chilometri
let price = km * 0.21;

// Controllo età utente (se minore di 18 anni o maggiore di 65 anni) e applica lo sconto appropriato
if (age < 18) {
    price = price * 0.8;
    console.log("Usufruisci del 20% di sconto")
} else if (age >65){
    price = price * 0.6;
    console.log("Usufruisci del 40% di sconto")
} else{
    console.log("Non usufruisci di nessuno sconto")
}

// Arrotonda il prezzo finale a due decimali
price = price.toFixed(2);

// Mostra il prezzo finale
console.log("Il prezzo del biglietto è: " + price + "€")