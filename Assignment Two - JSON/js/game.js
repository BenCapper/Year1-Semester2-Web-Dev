//Code Reference: https://www.youtube.com/watch?v=ZniVgo8U7ek

const cards = document.querySelectorAll('.game-card'); //const variables behave like let ones, except they cannot be reassigned.

let hasFlipped = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard(){
	if(lockBoard) return; //doesnt allow method to be run again before this variable is reset to false.
	if(this === firstCard) return;
	this.classList.toggle('flip'); //assigns or removes the flip class the chosen card.
	
	if(!hasFlipped){ //first time the player has clicked a card
					 //if hasFlipped is set to false.
		hasFlipped= true;
		firstCard = this;
	}else{
		hasFlipped = false; //set hasFlipped back to false to allow second choice
		secondCard = this;
		if(firstCard.dataset.name === secondCard.dataset.name){ //if the first card matches the second.
		  firstCard.removeEventListener('click', flipCard); //remove the eventListener so the cards cant be interacted with.
		  secondCard.removeEventListener('click', flipCard);
		  resetBoard;
		}else{ 
			lockBoard = true; //sets a variable to true which wont allow cards to be clicked until end of fucntion when it is reset.
			setTimeout(() => { //set a timeout so cards animate before flip class is removed.
			firstCard.classList.remove('flip');
			secondCard.classList.remove('flip');
			resetBoard(); //sets defaults so user can pick two more cards
			}, 1500); //1500ms timeout
		}
	}
}

function resetBoard() { //sets defaults.
	hasFlipped = false;
	lockBoard = false;
	firstCard = null;
	secondCard = null;
}

(function shuffle(){ //assigns a random value between 1 and 12 to each card and rounds it down to an integer.
	cards.forEach(card => {
		let randomPos = Math.floor(Math.random()*12);
		card.style.order = randomPos;
	});
})();

//add eventListener to use flipCard function when a card is clicked
cards.forEach(card => card.addEventListener('click', flipCard));
