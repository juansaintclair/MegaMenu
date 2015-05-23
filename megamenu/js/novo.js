/* global $ */

$(function () {
		$('.pai').on('mouseenter', function () {
			$('.filho', this).slideDown();
		})
		.on('mouseleave', function () {
			$('.filho').slideUp();
		});
});