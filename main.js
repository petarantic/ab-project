
for (var i = 0; i < caption.length; i++) {
const caption = document.getElementById('caption');
	caption[i].addEventListener('click', function(e) {
		alert(e.target);
	})
}