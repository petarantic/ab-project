const allProducts = document.getElementById('allProducts');

const productsChunks = chunkArray(Object.keys(abProducts));


productsChunks.forEach(function(productsInChunk, index) {
	let rowDiv = document.createElement('div');
	rowDiv.className = 'row';
	allProducts.appendChild(rowDiv);

	productsInChunk.forEach(function(product, index) {
		let colDiv3 = document.createElement('div');
		let a = document.createElement('a');
		let img = document.createElement('img');
		a.href = '#';
		a.innerText = abProducts[product].name;
		a.className = 'caption';
		a.setAttribute("data-toggle", "modal");
		a.setAttribute("data-target", "#myModal")
		a.onclick = () => chooseProduct(product);
		img.src = abProducts[product].img;
		img.className = 'thumbnail';
	  colDiv3.className = 'product col-md-3';
  
	  rowDiv.appendChild(colDiv3);
		colDiv3.appendChild(img);
		colDiv3.appendChild(a);
	})
  });

function chunkArray(array, perChunk = 4) {
	return array.reduce((resultArray, item, index) => {
		console.log('index glavnog niza', index) 
		const chunkIndex = Math.floor(index/perChunk)

		if(!resultArray[chunkIndex]) {
		  resultArray[chunkIndex] = []
		}
		console.log('index u chunk-u', chunkIndex)

		resultArray[chunkIndex].push(item)

		console.log('chunks trenutno', resultArray)
		return resultArray;
	}, [])
};

function chooseProduct(product) { 
	let captionDiv = document.getElementById('captionInfo');
	let captionTitle = document.getElementById('captionTitle')
		
		let captionImg = document.createElement('img');
		let captionPrice = document.createElement('p');
  
    	captionTitle.innerHTML = 'Ime proizvoda: ' + abProducts[product].name;
    	captionImg.src = abProducts[product].img;
    	captionPrice.innerHTML = 'Cena: ' + abProducts[product].price;

    	captionImg.className = 'captionImg';
    	captionPrice.className = 'captionPrice';

    captionDiv.appendChild(captionImg);
    captionDiv.appendChild(captionPrice);
  };
