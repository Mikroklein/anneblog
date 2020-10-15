let articles = document.querySelectorAll('.article-item');
let select = document.querySelector('.theme-button');


select.onchange = function() {
	for (let article of articles) {	
	if (article.dataset.category !== select.value && select.value !== 'all') {
		article.classList.add('hidden');
	} else {
	article.classList.remove('hidden');
}  
}
}

