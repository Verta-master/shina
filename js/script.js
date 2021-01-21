//Header basket
$('.header__icon--basket').click(function() {
  event.preventDefault();
  $('.header__drop').slideToggle();
})

$('.header__close').click(function() {
  $('.header__drop').slideUp();
})

//Header scroll
if (window.innerWidth > 1200) {
  $(window).scroll(function(){
    if ((window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop) >= 100) {
      $('header').addClass('header--scroll');
    } else {
      $('header').removeClass('header--scroll');
    };
  })
} else {
  $('header').addClass('header--mobile');
}

//Search
if (window.innerWidth < 767) {
  $('.search__open').click(function() {
    $('.search__form').toggleClass('search__form--show');
  })
}
