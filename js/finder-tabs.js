var tabs = document.querySelector('.tabs-buttons .swiper-wrapper');

var tabButtons = new Swiper('.tabs-buttons', {
  slidesPerView: 6,
  spaceBetween: 20,
  freeMode: true,
  navigation: {
    nextEl: '.finder__next',
    prevEl: '.finder__prev',
  },
  mousewheelControl: true,
  breakpoints: {
    1200: {
      spaceBetween: 10,
    },
    1022: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    766: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
    360: {
      slidesPerView: 2,
      spaceBetween: 5,
    }
  },
  onTap: function(swiper, event) {
    if ( event.target.classList.contains('swiper-slide') && !event.target.classList.contains('active-tab') ) {
      event.target.parentElement.querySelector('.active-tab').classList.remove('active-tab');
      event.target.classList.add('active-tab');
      tabContent.slideTo(swiper.clickedIndex);
    }
  }
});

var tabContent = new Swiper('.tabs-content', {
  onSlideChangeStart: function(swiper, event) {
    tabs.children[swiper.previousIndex].classList.remove('active');
    tabs.children[swiper.activeIndex].classList.add('active');
  }
});
