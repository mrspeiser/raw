(function(){

$('li').on('mouseover', function(){
	$('.navigation').addClass('expand');
});

$('header').on('mouseleave', function(){
	$('.navigation').removeClass('expand');
	$('.nav-menu a.active').removeClass('active');
});

$('.nav-menu a').on('mouseover', function(){
	$('.nav-menu a.active').removeClass('active');
	$(this).addClass('active');
	linkElmnts = $('.nav-menu a').get();
});

$('.nav-menu a').on('mouseleave', function(){
	console.log($('.navigation').height() == 0)
	if ($('.navigation').height() == 0) {
		$('.nav-menu a.active').removeClass('active');
	}
});
	

})();
