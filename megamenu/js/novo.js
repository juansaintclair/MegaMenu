/* global $ */

var config = {
	objConstante: '.constante'
};

$(function () {
	$('.pai')
		.on('mouseenter', function () {
		ocultaFilhos();
		getLargura($(this));
	});
	$('.menu').on('mouseleave', function () {
		ocultaFilhos();
	});
});

function ocultaFilhos() {
	$('.filho').hide().css('margin-left', '');
}

function getLargura($item) {
	var largura = $item.width();
	var pai = $item.data('pai');

	if ($item.hasClass('filho')) {
		largura += getLargura($('[data-nome="' + pai + '"]'));
	}

	var $seletor = pai
		? $item
		: $('.filho[data-pai="' + $item.data('nome') + '"]');

	$seletor
		.show()
		.css({
		marginLeft: largura
	});

	return largura;
}