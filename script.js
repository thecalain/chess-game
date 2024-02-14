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

function generalMovement() {
	let firstClick = false;
	let pieceSelected;
	squares.forEach((square) => {
		square.addEventListener('click', () => {
			if (!gameSetup && gameOngoing) {
				if (!firstClick && square.textContent !== '') {
					setTimeout(() => {
						square.style.opacity = 0.5;
					}, 2000);
					firstClick = true;
					pieceSelected = square.textContent;
					firstClickCoordinates = square.id;
					console.log(firstClickCoordinates);
				} else if (firstClick && square.textContent === '') {
					square.style.opacity = 0.5;
					setTimeout(() => {
						squares.forEach((opacityOfSquare) => {
							opacityOfSquare.style.opacity = 1;
						});
						firstClick = false;
					}, 200);
					SecondClickCoordinates = square.id;
					firstClickedSquare = document.getElementById(
						firstClickCoordinates
					);
					firstClickedSquare.textContent = '';
					console.log(SecondClickCoordinates);
				} else if (firstClick && square.textContent !== '') {
					setTimeout(() => {
						squares.forEach((opacityOfSquare) => {
							opacityOfSquare.style.opacity = 1;
						});
					}, 200);
					setTimeout(() => {
						square.style.opacity = 0.5;
					}, 200);
					firstClick = true;
				} else {
					firstClick = false;
				}
			}
			square.textContent = pieceSelected;
			console.log(pieceSelected);
		});
	});
}

gameStart();
generalMovement();
