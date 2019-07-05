if(screen.width < 480) { 
	$( 'p' , 'li' ).removeClass( 'color' ) 
} else {
    spectrum();

	function spectrum(e){
		var hueNumRed = (Math.floor(Math.random() * 50));
		var hueNumGreen = (Math.floor(Math.random() * 110));
		var hueNumBlue = (Math.floor(Math.random() * 255));
	    var hue = 'rgba(' + hueNumRed + ',' + hueNumGreen + ',' + hueNumBlue + ', .8 )';
	    $('.color, .color a').animate( { color: hue }, 10000);
	    spectrum();
	    
	    e.preventDefault();
	 }

}