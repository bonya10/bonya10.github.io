$(document).ready(function() {

//light effect nav menu

Array.from(document.querySelectorAll('.fancy-hover'),function(el){

  el.addEventListener('mousemove',function(e){
    el.style.setProperty('--px', e.clientX - el.offsetLeft);
    el.style.setProperty('--py', e.clientY - el.offsetTop);
  });

});
	
	// Mobile Navigation
	$('.nav-toggle').on('click', function() {
		$(this).toggleClass('close-nav');
		nav.toggleClass('open');
		return false;
	});	
	nav.find('a').on('click', function() {
		$('.nav-toggle').toggleClass('close-nav');
		nav.toggleClass('open');
	});
});
