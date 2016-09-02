	var basePath="assets/images/";
	var img = ["1.svg", "2.svg", "3.svg", "4.svg", "5.svg", "6.svg", "7.svg", "8.svg", "9.svg", "10.svg", "11.svg"]
     function imgRandom(imgArr) {
        return imgArr[Math.floor(Math.random() * imgArr.length)];
    }
	//console.log(imgRandom(img));
	imgSrc = imgRandom(img);
	
	$('#pencil2').prepend($('<img>',{src: basePath + imgSrc }))
	$('#pencil').prepend($('<img>',{src: basePath + imgSrc}))
	//prepeneds to div, add's image element, adds src as basepath + radomfunciton on image name