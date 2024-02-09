const squares = document.querySelectorAll('button');
let firstClick = false;
squares.forEach((square) => {
	square.addEventListener('click', () => {
		if (firstClick === false && square.textContent !== '') {
			square.style.opacity = 0.5;
			firstClick = true;
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
	});
});
