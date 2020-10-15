
let feedbackField = document.querySelector('.feed-field');
let sendButton = document.querySelector('.send');


feedbackField.oninput = function() {
	console.log(feedbackField.textContent.length)
	} 



/*
feedbackField.oninput = function() {
	if (feedbackField.value.length > 142||feedbackField.value.length < 10) {
		feedbackField.classList.add('warning');
		sendButton.disabled = true;
	} 

	else {
		feedbackField.classList.remove('warning');
		sendButton.disabled = false;
	}
}*/