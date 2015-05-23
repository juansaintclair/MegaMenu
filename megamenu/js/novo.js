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
	
	$('.pai, .filho').mouseenter(function () {
		$(this).css({ 'backgroundColor': 'aqua' });
	})
		.mouseleave(function () {
		$(this).css({ 'backgroundColor': '' });
	});
	
	$('.menu').mouseleave(function () {
		ocultaFilhos();
	});
});

function ocultaFilhos() {
	$('.filho').hide().css('margin-left', '');
}

function exibeHierarquia($item) {
	var largura = $item.width();
	var pai = $item.data('pai');

	if ($item.hasClass('filho')) {
		largura += exibeHierarquia($('[data-nome="' + pai + '"]'));
	}

	$('.filho[data-pai="' + $item.data('nome') + '"]')
		.show()
		.css({
		marginLeft: largura
	});

	return largura;
}