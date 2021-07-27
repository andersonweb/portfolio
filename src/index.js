import './scss/stylesheet.scss';
import '@fortawesome/fontawesome-free/js/all';
import 'jquery/src/jquery';

$(document).ready(() => {

	/* Abrir Portfólio */
	$('#projs .btn-toggle-portfolio').click(() => {
		$('#projs .portfolio-content').toggleClass('portfolio-content-v');
	});

});