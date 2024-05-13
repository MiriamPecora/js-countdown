<!-- CONSEGNA: -->
<!-- Simulare un count down di 10 secondi che alla fine dice "Buon anno!"
Potete stampare il messaggio in pagina con un semplice alert.
Bonus 1
Mostrate il conteggio alla rovescia in pagina;
Bonus 2
Aggiungete un bottone che interrompe il count down e mostra il messaggio; -->

<!-- RISOLUZIONE DEL PROBLEMA CON BONUS 1 -->

-Definire una variabile per il tempo rimanente con valore di 10;
-Definire una variabile con all'interno setInterval;
    -All'interno della funzione far sì che la variabile del tempo rimanente diminuisca (--) ad ogni secondo.
    -Con un'istruzione condizionale, specificare che quando il tempo rimanente arriva a <= 0, stampare un alert per augurare buon anno e interrompere l'intervallo.
        -Per il primo bonus, invece:
            -Sostituire il numero in pagina (10) con un numero inferiore allo scoccare di ogni secondo, per poi sostituire l'intero paragrafo con gli auguri di buon anno.
    -Inserire 1000 come parametro del tempo.
