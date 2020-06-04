const caption = document.getElementsByClassName('caption');

for (var i = 0; i < caption.lenght; i++) {
		caption[i].addEventListener('click', function(e) {
			e.preventDefault();
			cosole.log(e.target);
		})
}