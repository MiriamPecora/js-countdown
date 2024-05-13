// Definire una variabile per il tempo rimanente con valore di 10
let timeleft = 10;

// Definire una variabile con all'interno setInterval
let timer = setInterval(function(){
    // All'interno della funzione far sì che la variabile del tempo rimanente diminuisca (--) ad ogni secondo
    timeleft--;
    // Sostituisco il tempo rimanente in pagina, stampando così il countdown cifra per cifra
    // console.log(timeleft);
    document.getElementById("countdowntimer").textContent = timeleft;

    if(timeleft <= 0) {
        // Stampo un alert per augurare buon anno
        // alert("Buon anno!")
        // Sovrascrivo il testo in pagina
        document.getElementById("text").textContent = "Buon anno!";
        // Interrompo l'intervallo richiamandone il nome
        clearInterval(timer);
    }
    // Aggiungo come parametro 1000 per i dieci secondi
}, 1000);