let comment = document.querySelectorAll('.comment-item');
let commentForm = document.querySelector('.comments-form');
let commentList = document.querySelector('.comments-list');
let commentField = document.querySelector('.text-comment');

commentForm.onsubmit = function(evt) {
	evt.preventDefault();
	let newComment = document.createElement('li');
	newComment.classList.add('comment-item');
	newComment.textContent = commentField.value;
	commentList.append(newComment);
}