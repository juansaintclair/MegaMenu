/* global $ */

var config = {
	objConstante: '.constante'
};

$(function () {
	$('.pai').on('mouseenter', function () {
		var nomePai = $(this).data('nome');
		var larguraPai = getLargura($(this));

		$('.filho[data-pai="' + nomePai + '"]').show().animate({ marginLeft: larguraPai });
	})
		.on('mouseleave', function () {
		setTimeout(function () {
			$('.filho').hide().css('margin-left', '');
		}, 10000);

	});
});

function getLargura($item) {
	var largura = $item.width();

	if ($item.hasClass('filho')) {
		var pai = $item.data('pai');
		largura += getLargura($('[data-nome="' + pai + '"]'));
	}

	return largura;
}