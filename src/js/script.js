$(document).ready(function () {
  $(".gallery-list").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    asNavFor: ".gallery-nav-list",
  });
  $(".gallery-nav-list").slick({
    slidesToShow: 3,
    asNavFor: ".gallery-list",
    centerMode: true,
    focusOnSelect: true,
  });
});
