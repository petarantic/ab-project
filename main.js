const product = document.getElementsByClassName('product');

for (var i = 0; i < product.length; i++) {
	const a = document.createElement('a');
	const img = document.createElement('img');
	const linkText = document.createTextNode("my title text");
	a.appendChild(linkText);

	a.href = "#";
	img.src = '#'; 
		
	product[i].appendChild(a);
	a.appendChild(img);
};


