

$(document).ready(function(){

if($('.slider__body').length>0){
	$('.slider__body').slick({
		dots: true,
		arrows: false,
		adaptiveHeight: true,
		accesibility:false,
		slidesToShow:1,
		autoplaySpeed: 3000,
		nextArrow:'<button type="button" class="slick-next"></button>',
		prevArrow:'<button type="button" class="slick-prev"></button>',
		responsive: [{
			breakpoint:768,
			settings: {
			}
	}]
	
});
}
});

