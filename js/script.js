window.onload = function () {

	let slides = document.getElementsByClassName('list__item'),
		currentSlide = 0,
		previousButton = document.getElementById('previous'),
		nextButton = document.getElementById('next');

	nextButton.onclick = () => changeSlide(currentSlide + 1);
	previousButton.onclick = () => changeSlide(currentSlide - 1);

	function changeSlide(arg) {
		slides[currentSlide].className = 'list__item';
		currentSlide = (arg + slides.length) % slides.length;
		slides[currentSlide].className = 'list__item showing';
	}

	let closePopup = document.getElementsByClassName('fa-times')[0];
	closePopup.onclick = () => document.getElementById('share').checked = false
};