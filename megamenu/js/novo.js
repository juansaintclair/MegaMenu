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

//	$('.filho').not('.pai').mouseleave(function () {
//		$('.filho').not($(this).siblings()).not(this).hide().parents('.top').css('margin-left', '');
//	});

	$('.menu').mouseleave(function () {
		ocultaFilhos();
	});
});

function ocultaFilhos(pai) {
	$('.filho').hide().parents('.top').css('margin-left', '');
	$('.fixo').hide().css({ marginLeft: '220px' });
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

	$('.fixo').show().css({ marginLeft: largura + $('.patriarca').width() });

	return largura;
}