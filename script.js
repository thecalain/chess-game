const squares = Array.from(document.getElementsByClassName('square'));
const playWhite = document.getElementById('play-white');
const playBlack = document.getElementById('play-black');
const board = document.getElementById('board');
let gameSetup = true;
let gameOngoing = false;
let firstClick = false;
let pieceSelected;

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

squares.forEach((square) => {
	square.addEventListener('click', () => {
		if (!gameSetup && gameOngoing) {
			if (firstClick === false && square.textContent !== '') {
				square.style.opacity = 0.5;
				firstClick = true;
				pieceSelected = square.textContent;
				console.log(pieceSelected);
			} else if (firstClick === true && square.textContent === '') {
				square.style.opacity = 0.5;
				setTimeout(() => {
					squares.forEach((opacityOfSquare) => {
						opacityOfSquare.style.opacity = 1;
					});
					firstClick = false;
				}, 200);
			} else if (firstClick === true && square.textContent !== '') {
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
	});
});

// function pawnMovement() {
// 	if (firstClick === true && pieceSelected === '♟') {
// 		squares.forEach((square) => {
// 			square.addEventListener('click', () => {
// 				if ((square.textContent = '♟' && firstClick === true)) {
// 				}
// 			});
// 		});
// 	}
// }
