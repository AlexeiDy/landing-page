
export function smoothScrollToSections() {
  $('.js-navigation-menu a').smoothScroll({
    offset: -100,
    speed: 1000
  })
}

export function goToTop() {
  var toTopBtn = $('.go-to-top')

  $(window).scroll(function () {
    if ($(window).scrollTop() > 1200) {
      toTopBtn.show(400)
    } else {
      toTopBtn.hide(400, function () {
        $(this).removeAttr('style')
      })
    }
  })

  $('.js-to-top a').on('click', function () {
    $.smoothScroll({
      scrollTarget: $('body'),
      speed: 2000
    })
    return false
  })

}