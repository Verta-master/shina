var breakpoint = window.matchMedia('(min-width: 480px)');
var newsSwiper;
var breakpointChecker = function() {
  if (breakpoint.matches === true) {
    if (newsSwiper !== undefined) newsSwiper.destroy(true, true);
    return;
    } else if (breakpoint.matches === false) {
      return enableSwiper();
    }
};

var enableSwiper = function() {
  newsSwiper = new Swiper ('.promo__slider', {
    pagination: {
      el: '.promo__pagination',
      clickable: true,
    },
    simulateTouch: false,
    preventClicks: false,
    preventClicksPropagation: false,
    effect: 'fade',
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
  })
};

breakpoint.addListener(breakpointChecker);
breakpointChecker();
