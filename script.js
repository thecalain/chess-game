const squares = Array.from(document.getElementsByClassName('square'));
const playWhite = document.getElementById('play-white');
const playBlack = document.getElementById('play-black');
const board = document.getElementById('board');
let gameSetup = true;
let gameOngoing = false;

function gameStart() {
	playWhite.addEventListener('click', () => {
		playWhite.remove();
		playBlack.remove();
		board.style.display = 'grid';
		gameSetup = false;
		gameOngoing = true;
	});

	playBlack.addEventListener('click', () => {
		playWhite.remove();
		playBlack.remove();
		board.style.display = 'grid';
		squaresArray = Array.from(squares);
		squaresArray.reverse();
		squaresArray.forEach((square, index) => {
			square.style.order = index + 1;
		});
		gameSetup = false;
		gameOngoing = true;
	});
}

let firstClickedCoordinates;
let firstClickedSquare;
let secondClickedCoordinates;
let secondClickedSquare;
let pieceSelected;
let firstClick = false;

function generalMovement() {
	//No capturing logic yet
	squares.forEach((square) => {
		square.addEventListener('click', () => {
			if (!gameSetup && gameOngoing) {
				if (!firstClick && square.textContent !== '') {
					// When clicking a piece for the first time
					firstClick = true;
					firstClickedCoordinates = square.id;
					firstClickedSquare = document.getElementById(firstClickedCoordinates);
					pieceSelected = square.textContent;
					square.style.opacity = 0.5;
					console.log(firstClickedCoordinates);
				} else if (firstClick && square.textContent === '' && firstClickedCoordinates) {
					// When clicking an empty square on the second click
					square.style.opacity = 0.5;
					setTimeout(() => {
						squares.forEach((opacityOfSquare) => {
							opacityOfSquare.style.opacity = 1;
						});
					}, 200);
					firstClickedSquare.textContent = '';
					square.textContent = pieceSelected;
					firstClick = false;
					console.log(square.id);
				} else {
					//When clicking another piece after first click
					firstClickedSquare.style.opacity = 1;
					firstClick = false;
				}
			}
		});
	});
}

gameStart();
generalMovement();
