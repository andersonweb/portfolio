import './scss/stylesheet.scss';
import '@fortawesome/fontawesome-free/js/all';
import 'jquery/src/jquery';

$(document).ready(() => {

	$('.btn-toggle-portfolio').click(function() {
		var proj = $(this).attr('attr-proj-name');
		$('.portfolio-content').toggleClass('portfolio-content-v');
		$('.content-'+proj).addClass('d-block').siblings().removeClass('d-block');
	});

	$('.toggle-menu').on('click', function() {
		$('header .navbar-nav').toggleClass('d-none');
	});

	// Rolar suavemente 
	$("a").click(function() {
		var $id = $(this).attr('href');
	    $('html, body').animate({
	        scrollTop: $($id).offset().top
	    }, 2000);
	});


});