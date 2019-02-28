import 'slick-carousel'
import $ from 'jquery'

export function bannerSlider() {
  $('.js-banner-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    adaptiveHeight: true
  })
}

export function testimonialSlider() {
  $('.js-testimonials-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    adaptiveHeight: true
  })
}

export function portfolioSlider() {
  $('.js-portfolio-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    prevArrow: '.portfolio__slider-arrow-left',
    nextArrow: '.portfolio__slider-arrow-right',
    adaptiveHeight: true
  })
}

