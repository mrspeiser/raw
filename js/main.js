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
	// $(this).prepend("<span class='line lineExpand'></span>")
	experience
motorsport
store

	linkElmnts = $('.nav-menu a').get();
});

$('.nav-menu a').on('mouseleave', function(){
	console.log($('.navigation').height() == 0)
	if ($('.navigation').height() == 0) {
		$('.nav-menu a.active').removeClass('active');
	}
});
	

})();
