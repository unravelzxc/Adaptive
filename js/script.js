
$('.wrapper').addClass('loaded');

$('.icon-menu').click(function(event) {
	$(this).toggleClass('active');
	$('.menu__body').toggleClass('active');
	$('body').toggleClass('lock');
});



function ibg(){
	let elements = document.querySelectorAll('.ibg');
	elements.forEach(function(item, index){
		 item = item.querySelector('img');
		 if( item.src.length > 0 ){
			  elements[index].style.backgroundImage = "url('" + item.src + "')";
		 }
	});
}
ibg();


