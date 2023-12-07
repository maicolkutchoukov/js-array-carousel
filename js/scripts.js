/*

MILESTONE 2
Adesso rimuoviamo tutto il markup statico e 
inseriamo tutte le immagini dinamicamente
servendoci dell'array fornito e un semplice 
ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, 
che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo 
con lo stesso slider stilato nella milestone 1, 
ma costruito dinamicamente attraverso JavaScript.

*/

const img1 = document.createElement('img');
img1.src = 'img/01.webp';
img1.classList = 'active'
const img2 = document.createElement('img');
img2.src = 'img/02.webp';
const img3 = document.createElement('img');
img3.src = 'img/03.webp';
const img4 = document.createElement('img');
img4.src = 'img/04.webp';
const img5 = document.createElement('img');
img5.src = 'img/05.webp';

const imgArray = [img1, img2, img3, img4, img5];
const carousel = document.querySelector('.carousel-container');

for (let i = 0; i < imgArray.length; i++) {    
    carousel.append(imgArray[i]);
}

/*

MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l'immagine attiva, 
che quindi verrà visualizzata al posto della precedente.
Prima di partire a scrivere codice:
Non lasciamoci spaventare dalla complessità apparente dell'esercizio, 
ma analizziamo prima, come abbiamo fatto sempre, cosa ci potrebbe aspettare.
Abbiamo completato ormai da qualche giorno la sessione HTML e CSS, 
se non ci ricordiamo qualcosa andiamo pure a riguardare alcuni argomenti. 
Non dedichiamo però al ripasso più di una mezz'ora, 
così da non perdere di vista il focus dell'esercizio.

*/

const buttonPrev = document.querySelector('.prev');
const buttonNext = document.querySelector('.next');
let contatore = 0

// Creazione bottone scorrimento 'Foto successiva'

buttonNext.addEventListener('click', function(){
    
    if (contatore <= 3){
        imgArray[contatore].classList.remove('active');    
        contatore++;
        imgArray[contatore].classList.add('active');             
    } else if (contatore = 4){
        imgArray[contatore].classList.remove('active');
        contatore = 0;
        imgArray[contatore].classList.add('active');       

    }
    
})

// Creazione bottone scorrimento 'Foto Precedente'

buttonPrev.addEventListener('click', function(){
    
    if (contatore > 0){
        imgArray[contatore].classList.remove('active');      
        contatore--;
        imgArray[contatore].classList.add('active');               
    }  else if (contatore = 1){
        contatore = 0
        imgArray[contatore].classList.remove('active');
        contatore = 4;
        imgArray[contatore].classList.add('active'); 
    }   
})

