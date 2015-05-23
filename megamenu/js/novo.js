/* global $ */
//$('#menu').pluginManeiro({classChild: 'filho', classParent:pai});

var config = {
	classChild: 'filho',
	classParent: 'pai'
};

$(function () {
	$('.pai').on('mouseenter', function () {
		var nomePai = $(this).data('nome');
		$('.filho[data-pai="' + nomePai + '"]').slideDown();
	})
		.on('mouseleave', function () {
		$('.filho').slideUp();
	});
});

/*
$(function () {
	$('.'+config.classParent+' > li').on('mouseenter', function () {
		var $filhos = $(this).children('.' + config.classChild);
		$filhos.slideDown();
	})
	.on('mouseleave', function () {
		$('.' + config.classChild).slideUp();
	});
});
*/