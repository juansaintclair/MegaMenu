/* global $ */

$(function () {
	$('.pai > li').on('mouseenter', function () {
		var $filhos = $(this).children('.filho');
		$filhos.slideDown();
	})
	.on('mouseleave', function () {
		$('.filho').slideUp();
	});
});