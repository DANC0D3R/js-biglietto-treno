// Richiesta inserimento età
let age = prompt("Inserisci la tua età");
// Conversione in numero intero
age = parseInt(age)

// Richiesta inserimento numero dei chilometri da percorrere
let km = prompt("Inserisci il numero dei chilometri da percorrere");
// Conversione in numero intero
km = parseInt(km)

// Controllo dati inseriti correttamente
if (isNaN(km) == true || isNaN(age) == true){

    alert("I valori inseriti non sono validi, aggiornare la pagina e riprovare")
    
} else {

    // Calcola il prezzo del biglietto in base ai chilometri
    let price = km * 0.21;

    // Controllo età utente (se minore di 18 anni o maggiore di 65 anni) e applica lo sconto appropriato
    if (age < 18) {

        price = price * 0.8; /* applica il 20% di sconto*/
        console.log("Usufruisci del 20% di sconto")

    } else if (age > 65){

        price = price * 0.6; /* applica il 40% di sconto*/
        console.log("Usufruisci del 40% di sconto")

    } else{

        console.log("Non usufruisci di nessuno sconto")
        
    }

    // Arrotonda il prezzo finale a due decimali
    price = price.toFixed(2);

    // Mostra il prezzo finale
    console.log("Il prezzo del biglietto è: " + price + "€")

}