//Header basket
$('.header__icon--basket').click(function() {
  event.preventDefault();
  $('.header__drop').slideToggle();
})

$('.header__close').click(function() {
  $('.header__drop').slideUp();
})


//if (window.innerWidth < 766) {
//  $('.menu__link').click(function() {
//    $('.menu__list').slideToggle();
//    $('.menu').removeClass('menu--opened');
//  })
//}

//Scroll to top
$(window).scroll(function(){
  if ((window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop) >= 100) {
    $('header').addClass('header--scroll');
  } else {
    $('header').removeClass('header--scroll');
  };
});
