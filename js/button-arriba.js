$(document).ready(function(){
 
	$('.fixed-action-btn').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.fixed-action-btn').slideDown(300);
		} else {
			$('.fixed-action-btn').slideUp(300);
		}
	});

});
