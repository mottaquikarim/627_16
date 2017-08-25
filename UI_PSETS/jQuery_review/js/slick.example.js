const $slideshow = $('.js-slideshow');

$slideshow.slick({
  infinite: true,
  arrows: false,
});

const $nextButton = $('.js-next');
const onNextButtonClick = () => {
	$slideshow.slick('slickNext');
}
$nextButton.click(onNextButtonClick)

const $pages = $('.js-page');

const goToSlide = (e) => {
	const $thisButton = $(e.target);
	const value = parseInt($thisButton.html(), 10);
	console.log(typeof value, value)
	$slideshow.slick('slickGoTo', value - );
}

$pages.click(goToSlide)