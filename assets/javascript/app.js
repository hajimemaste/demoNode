$(document).ready(function () {
  $(".main__hero-list-img").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    autoplaySpeed: 3000,
    autoplay: true,

    asNavFor: ".main__hero-list-product",
  });
  $(".main__hero-list-product").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: ".main__hero-list-img",
    dots: false,
    centerMode: true,
    focusOnSelect: true,
  });
});

$(document).ready(function () {
  $(".main__endow-listimg").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});

$(document).ready(function () {
  $(".listproduct__list-adv").slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});

$(document).ready(function () {
  $(".type-list").slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});

$(document).ready(function () {
  $(".listproduct__container-list-img").slick({
    dots: true,
  });
});

const btnIncrease = document.querySelector(
  ".basket__main-quantity-btn-increase"
);
const btnDecrease = document.querySelector(
  ".basket__main-quantity-btn-decrease"
);
const inputQuantity = document.querySelector(
  ".basket__main-quantity-box input"
);

btnIncrease.onclick = () =>
  (inputQuantity.value = parseInt(inputQuantity.value) + 1);

btnDecrease.onclick = () => {
  if (inputQuantity.value > 0) {
    inputQuantity.value = parseInt(inputQuantity.value) - 1;
  }
  return;
};
