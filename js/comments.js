let comment = document.querySelectorAll('.comment-item');
let commentForm = document.querySelector('.comments-form');
let commentList = document.querySelector('.comments-list');
let commentField = document.querySelector('.text-comment');
let charCounter = document.querySelector('.char-counter');
let sendButton = document.querySelector('.btn-send-comment');

commentForm.onsubmit = function(evt) {
	evt.preventDefault();
	let newComment = document.createElement('li');
	newComment.classList.add('comment-item');
	newComment.textContent = commentField.value;
	commentList.append(newComment);
	commentField.value = '';
	charCounter.textContent = 0;
}

commentField.oninput = function() {
	charCounter.textContent = commentField.value.length;
	if (commentField.value.length > 142||commentField.value.length < 3) {
		commentField.classList.add('warning');
		sendButton.disabled = true;
	} 

	else {
		commentField.classList.remove('warning');
		sendButton.disabled = false;
	}
}