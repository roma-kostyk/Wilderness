$(function() {
	$('.carousel-container').on('init', function(event, slick) {
		$('.total-slides').html(`${slick.slideCount > 9 ? '' : '0'}${slick.slideCount}`);
	});

	$('.carousel-container').slick({
		autoplay: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		prevArrow: '<button type="button" class="slick-prev custom-arrow-prev"></button>',
		nextArrow: '<button type="button" class="slick-next custom-arrow-next"></button>',
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 750,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	$('.carousel-container').on('afterChange', function(event, slick, currentSlide) {
		const current = currentSlide + 1;

		$('.currect-slide').html(`${current > 9 ? '' : '0'}${current}`);
	});
});
