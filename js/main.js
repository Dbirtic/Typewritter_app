// main typewritter function
/* const TypeWritter = function(txtElement, words, wait = 3000){
    this.txtElement = txtElement;
    this.words = words;
    this.txt = ''; // text before reading the 
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10); // we want a decimal wait time
    this.type(); // call method for typewritting
    this.isDeleting = false; // if it's deleting
}

// Type method
TypeWritter.prototype.type = function(){
    // current index of word
    const current = this.wordIndex % this.words.length;

    // get full text of current word
    const fullTxt = this.words[current];

    // check if deleting
    if(this.isDeleting){
        // remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else{
        // add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // insert text into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 300;

    if(this.isDeleting){
        typeSpeed /= 2;
    }

    // Is word complete?
    if(!this.isDeleting && this.txt === fullTxt){
        typeSpeed = this.wait; // this will pause after the word is completed
        this.isDeleting = true;        
    } else if(this.isDeleting && this.txt === ''){
        this.isDeleting = false;
        // move to next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed); // call type() function every half a second
} */

// ES6 class
class TypeWritter{
    constructor(txtElement, words, wait = 3000){
        this.txtElement = txtElement;
        this.words = words;
        this.txt = ''; // text before reading the 
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10); // we want a decimal wait time
        this.type(); // call method for typewritting
        this.isDeleting = false; // if it's deleting
    }

    type(){
        // current index of word
        const current = this.wordIndex % this.words.length;

        // get full text of current word
        const fullTxt = this.words[current];

        // check if deleting
        if(this.isDeleting){
            // remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else{
            // add char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        // insert text into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        // Initial Type Speed
        let typeSpeed = 100;

        if(this.isDeleting){
            typeSpeed /= 2;
        }

        // Is word complete?
        if(!this.isDeleting && this.txt === fullTxt){
            typeSpeed = this.wait; // this will pause after the word is completed
            this.isDeleting = true;        
        } else if(this.isDeleting && this.txt === ''){
            this.isDeleting = false;
            // move to next word
            this.wordIndex++;
            // Pause before start typing
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed); // call type() function every half a second

    }
}

// Init on DOM load
document.addEventListener("DOMContentLoaded", init);

// Init app
function init(){
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // init typewritter
    new TypeWritter(txtElement, words, wait);
}