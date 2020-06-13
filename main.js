
/*for (var i = 0; i < product.length; i++) {
	const a = document.createElement('a');
	const img = document.createElement('img');
	const linkText = document.createTextNode("my title text");
	a.appendChild(linkText);

	a.href = "#";
	img.src = '#'; 
		
	product[i].appendChild(a);
	a.appendChild(img);
};


*/

const allProducts = document.getElementsByClassName('allProducts');


Object.keys(abProducts).forEach(function(item, index, array) {
	chunkArray(item, index, array);
	if (index === 0) {
		array.length = array.indexOf(item);
	};
});

function chunkArray(item, index, array) {
	var perChunk = 4;
	var result = array.reduce((resultArray, item, index) => { 
		const chunkIndex = Math.floor(index/perChunk)
	  
		if(!resultArray[chunkIndex]) {
		  resultArray[chunkIndex] = []
		}
	  
		resultArray[chunkIndex].push(item)
	  
		return resultArray
	  }, [])
	  
	  console.log(result);
};