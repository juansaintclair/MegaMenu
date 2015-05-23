/* global $ */

$(function () {
	$('.pai li').on('mouseenter', function () {
		var $filhos = $('.filho', this);
		$filhos.slideDown();
	})
	.on('mouseleave', function () {
		$('.filho').slideUp();
	});
});