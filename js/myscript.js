
/* 
L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

*/

/*

Consegna
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git). !!!!

Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.

In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).

Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.


*/



    // Selezione l'elemento a cui aggiungere i nuovi elementi
    const divElement = document.querySelector('main');

    // creo una funzione per creare il primo elemento
    function addElement(){
        const newDivElement = document.createElement('div');
        newDivElement.classList.add('grid');

        return newDivElement;
    }
            
            // creo una seconda funzione per inserire il secondo elemento
    function addCellElement(){
        const newCellElement = document.createElement('div');
        newCellElement.classList.add('cell');

        return newCellElement;
    }
    // scrivo in pagina il primo elemento
    const gridElement = addElement();
    divElement.appendChild(gridElement);
        
    //evento per creare la pagina e resettarla ad ogni click
    button.addEventListener('click',
        function(){

            gridElement.innerHTML = '';
            let randomBomb = getRandomUniqueNumber(1,100, 16)

            // creo un array per inserire 16 numeri randomici (bombe)
            randomBombContainer = []
            randomBombContainer.push(randomBomb);
            console.log(randomBomb)
            
            // creo un ciclo che stampi in pagina 100 volte il secondo elemento all'interno del primo 
            for (let i = 1; i < 101; i++){
                const cellElement = addCellElement();
                cellElement.innerHTML = i;
                gridElement.appendChild(cellElement);
                let esploso = false;
                // Funzione che mi permette di colorare le celle con un click, il colore varia a seconda dei due casi
                cellElement.addEventListener('click',
                function(){
                    cellElement.classList.toggle('select');
                if (randomBomb.includes(i)){
                    cellElement.classList.add('explode');
                    alert('HAI PERSO');
                    esploso = true;
                    if (esploso = true){
                    console.log('fine');
                    }
                }   
                })
                
                
                
                
                
            }
        }
    )

    function getRandomUniqueNumber( min, max, elements ){
        const numbersList = [];
        
        if ( (max - min) < elements ){
            return [];
        }
        
        while (numbersList.length < elements){
            const newRandomNumber = randomNumberGen(min, max);
            if (!numbersList.includes(newRandomNumber)){
                    numbersList.push(newRandomNumber);
                }
            }
            
            return numbersList;
        }
        
        
        /**
         * Function tha generate a random number between two value (value min, value max)
         * 
         * @param  min  il numero minimo da includere nella generazione dei numeri randomici
         * @param  max il numero massimo da includere nella generazione dei numeri randomici
         * @returns un numero randomico compreso fra due valori
         */
    function randomNumberGen (min, max){
        const randomNumber = Math.floor( Math.random() * (max - min + 1) + min);

        return randomNumber;
    }


    