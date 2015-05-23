/* global $ */

var config = {
	objConstante: '.constante'
};

$(function () {
	$('.pai').on('mouseenter', function () {
		getLargura($(this));
	})
		.on('mouseleave', function () {
		setTimeout(function () {
			$('.filho').hide().css('margin-left', '');
		}, 1000);

	});
});

function getLargura($item) {
	var largura = $item.width();
	var pai = $item.data('pai');

	if ($item.hasClass('filho')) {
		largura += getLargura($('[data-nome="' + pai + '"]'));
	}

	var seletor = pai ? '[data-pai="' + pai + '"]' : '.filho'; 

	$(seletor)
		.children($item)
		.show()
		.animate({
		marginLeft: largura
	});

	return largura;
}