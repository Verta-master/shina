//Header basket
$('.header__icon--basket').click(function() {
  event.preventDefault();
  $(this).next().slideToggle();
})

$('.header__close').click(function() {
  $('.header__drop').slideUp();
})

//Header scroll
if (window.innerWidth > 1200) {
  $(window).scroll(function(){
    if ((window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop) >= 200) {
      $('.header-scroll').addClass('header-scroll--show');
    } else {
      $('.header-scroll').removeClass('header-scroll--show');
    };
  })
} else {
  $('.header-scroll').addClass('header-scroll--show');
}

//Search
if (window.innerWidth < 767) {
  $('.search__open').click(function() {
    $('.search__form').toggleClass('search__form--show');
  })
}
