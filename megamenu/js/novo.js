/* global $ */

var config = {
	objConstante: '.constante'
};

$(function () {
	$('.pai')
		.on('mouseenter', function () {
		getLargura($(this));
	});
	$('.menu').on('mouseleave', function () {
		$('.filho').hide().css('margin-left', '');
	});
});

function getLargura($item) {
	var largura = $item.width();
	var pai = $item.data('pai');

	if ($item.hasClass('filho')) {
		largura += getLargura($('[data-nome="' + pai + '"]'));
	}

	var $seletor = pai
		? $item//$('[data-nome="' + pai + '"]')
		: $('.filho[data-pai="' + $item.data('nome') + '"]');

	$seletor
		.show()
		.css({
		marginLeft: largura
	});

	return largura;
}