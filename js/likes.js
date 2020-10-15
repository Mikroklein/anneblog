let button=document.querySelector('.thumbsup');
let thumbsNumber=document.querySelector('.thumbs-number');

button.onclick=function() {
	if (button.classList.contains('added')) {thumbsNumber.textContent--}
	else {thumbsNumber.textContent++;}	
	button.classList.toggle('added');
};