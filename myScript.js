let button=document.querySelector('.theme-button');
let thumbsNumber=document.querySelector('.thumbs-number');
let counter=1;

button.onclick=function() {
	thumbsNumber.textContent = counter;
};