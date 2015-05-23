/* global $ */
//$('#menu').pluginManeiro({classChild: 'filho', classParent:pai});

var config = {
	classChild: 'filho',
	classParent: 'pai'
};

$(function () {
	$('.'+config.classParent+' > li').on('mouseenter', function () {
		var $filhos = $(this).children('.' + config.classChild);
		$filhos.slideDown();
	})
	.on('mouseleave', function () {
		$('.' + config.classChild).slideUp();
	});
});