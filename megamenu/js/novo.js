/* global $ */

var config = {
	objConstante: '.constante'
};

$(function () {
	$('.pai')
		.mouseenter(function () {
		ocultaFilhos();
		exibeHierarquia($(this));

		});
	$('.menu').mouseleave(function () {
		ocultaFilhos();
	});
});

function ocultaFilhos() {
	$('.filho').hide().parents('.top').css('margin-left', '');
}

function exibeHierarquia($item) {
	var largura = $item.width() + 10;
	var pai = $item.data('pai');

	if ($item.hasClass('filho')) {
		largura += exibeHierarquia($('[data-nome="' + pai + '"]'));
	}

	var top = $('.filho[data-pai="' + $item.data('nome') + '"]');
	
	top
		.show()
		.parents('.top')
		.css({
		marginLeft: largura
	});

	return largura;
}