(function(){

$('li').on('mouseover', function(){
	$('.navigation').addClass('expand');
	$('.line').animate({
		width: "500px",
		left: "100px"
	});
});

$('header').on('mouseleave', function(){
	$('.navigation').removeClass('expand');
	$('.nav-menu a.active').removeClass('active');
});

$('.nav-menu a').on('mouseover', function(){
	$('.nav-menu a.active').removeClass('active');
	$(this).addClass('active');
	if($('#models').hasClass('active')){
		$('#models-content').removeClass('dn');
		$('#brand-content').addClass('dn');
	} else if ($('#brand').hasClass('active')) {
		$('.navigation div').addClass('dn');
		$('#brand-content').removeClass('dn');
	} else if ($('#ownership').hasClass('active')){
		$('.navigation div').addClass('dn');
		$('#ownership-content').removeClass('dn');
	} else if ($('#experience').hasClass('active')){
		$('.navigation div').addClass('dn');
		$('#experience-content').removeClass('dn');
	} else if ($('#motorsport').hasClass('active')){
		$('.navigation div').addClass('dn');
		$('#motorsport-content').removeClass('dn');
	} else if ($('#store').hasClass('active')){
		$('.navigation div').addClass('dn');
		$('#store-content').removeClass('dn');
	}


	linkElmnts = $('.nav-menu a').get();
});

$('.nav-menu a').on('mouseleave', function(){
	// console.log($('.navigation').height() == 0)
	if ($('.navigation').height() == 0) {
		$('.nav-menu a.active').removeClass('active');
	}
});

$('.navigation').on('mouseleave', function(){
	$('.link-content').addClass('dn');
});

var images = {
	link1 : '<img class="mc-img" src="https://www.lamborghini.com/en-en/sites/en-en/files/DAM/it/models_gateway/blocks/special.png">',
	link2 : '<img class="mc-img" src="https://www.lamborghini.com/en-en/sites/en-en/files/DAM/it/models_gateway/blocks/huracan.png">',
	link3 : '<img class="mc-img" src="http://www.mansory.com/files/media/mansory/sliders/lamborghini-torofeo-carbon.png">',
	link4 : '<img class="mc-img" src="https://www.lamborghinipalmbeach.com/public/images/featured-vehicle_aventador-s_o.png">',
	link5 : '<img class="mc-img" src="https://www.lamborghini.com/en-en/sites/en-en/files/DAM/lamborghini/gateway-family/aventador/cars/aventador-coupe.png">',

}

src1 = "https://www.lamborghini.com/en-en/sites/en-en/files/DAM/it/models_gateway/blocks/special.png";
src2 = "https://www.lamborghini.com/en-en/sites/en-en/files/DAM/it/models_gateway/blocks/huracan.png";
src3 = "http://www.mansory.com/files/media/mansory/sliders/lamborghini-torofeo-carbon.png";
src4 = "https://www.lamborghinipalmbeach.com/public/images/featured-vehicle_aventador-s_o.png";
src5 = "https://www.lamborghini.com/en-en/sites/en-en/files/DAM/lamborghini/gateway-family/aventador/cars/aventador-coupe.png";	

$('.mc-link1').on('mouseover', function(){
	if ($('.navigation').height() == 0) {
		
	// } else if($('#models-content.img')){
	// 	$('#models-content.img').remove();

	// } 
}	else{
		$('#models-content').append(images.link1);
	}
	
});

$('.mc-link2').on('mouseover', function(){
	if ($('.navigation').height() == 0) {
		
	} else{
		$('#models-content').append(images.link2);
	}
});

$('.mc-link3').on('mouseover', function(){
	if ($('.navigation').height() == 0) {
		
	} else{
		$('#models-content').append(images.link3);
	}
});

$('.mc-link4').on('mouseover', function(){
	if ($('.navigation').height() == 0) {
		
	} else{
		$('#models-content').append(images.link4);
	}
});

$('.mc-link5').on('mouseover', function(){
	if ($('.navigation').height() == 0) {
		
	} else{
		$('#models-content').append(images.link5);
	}
});

})();
