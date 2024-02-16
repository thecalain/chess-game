const squares = Array.from(document.getElementsByClassName('square'));
const playWhite = document.getElementById('play-white');
const playBlack = document.getElementById('play-black');
const board = document.getElementById('board');
let gameSetup = true;
let gameOngoing = false;
// let whoseMoveTurn;

function gameStart() {
	playWhite.addEventListener('click', () => {
		playWhite.remove();
		playBlack.remove();
		board.style.display = 'grid';
		gameSetup = false;
		gameOngoing = true;
		// whoseMoveTurn = 'white';
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
		// whoseMoveTurn = 'white';
	});
}

const whitePieces = ['♖', '♘', '♗', '♕', '♔', '♙'];
const blackPieces = ['♜', '♞', '♝', '♛', '♚', '♟'];

function isWhiteOrBlack(piece) {
	let isWhite = whitePieces.includes(piece);
	let isBlack = blackPieces.includes(piece);
	if (isWhite) {
		return 'white';
	} else if (isBlack) {
		return 'black';
	} else {
		return null;
	}
}

console.log(isWhiteOrBlack('♜'), isWhiteOrBlack('♖'));

let firstClick = false;
let firstClickedCoordinates;
let firstClickedSquare;
let pieceSelected;

function generalMovement() {}
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
				console.log(pieceSelected);
			} else if (firstClick && square.textContent === '') {
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
			} else {
				if (isWhiteOrBlack(square.textContent) === isWhiteOrBlack(pieceSelected)) {
					//When clicking another different colored piece after first click
					console.log(square.textContent, pieceSelected);
					console.log(isWhiteOrBlack(square.textContent), isWhiteOrBlack(pieceSelected)); // null null ---> why?
					console.log(isWhiteOrBlack(square.textContent) === isWhiteOrBlack(pieceSelected));
					square.style.opacity = 0.5;
					firstClickedSquare.textContent = '';
					square.textContent = pieceSelected;
					setTimeout(() => {
						squares.forEach((opacityOfSquare) => {
							opacityOfSquare.style.opacity = 1;
						});
					}, 200);
					firstClick = false;
				} else {
					//When clicking another same colored piece after first click
					firstClickedSquare.style.opacity = 1;
					firstClick = false;
				}
			}
		}
	});
});

gameStart();
generalMovement();
