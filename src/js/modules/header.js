
export function fixedHeader() {
  var secHeader = $('.js-header')
  var headerHeight =
    parseInt(secHeader.outerHeight()) + parseInt(secHeader.css('top'))
  $(window).resize(function () {
    headerHeight =
      parseInt(secHeader.outerHeight()) + parseInt(secHeader.css('top'))
  })

  $(window).scroll(function () {
    if ($(this).scrollTop() > headerHeight) {
      secHeader.addClass('header--fixed')
      secHeader.slideDown(400)
    } else {
      secHeader.removeClass('header--fixed')
      secHeader.removeAttr('style')
    }
  })
}

export function adaptiveMenu() {
  var hamburgerBtn = $('.js-hamburger-btn')
  var navigationMenu = $('.js-navigation-menu')
  var navigationMenuLink = $('.js-navigation-menu-link')

  $(window).resize(function () {
    if (window.matchMedia('(min-width: 1200px)').matches) {
      hamburgerBtn.removeClass('open')
      navigationMenu.removeAttr('style')
    }
  })

  hamburgerBtn.on('click', function (event) {
    event.preventDefault()
    hamburgerBtn.toggleClass('open')
    navigationMenu.slideToggle(400, function () {
      if ($(this).css('display') === 'none') {
        $(this).removeAttr('style')
      }
    })
  })

  navigationMenuLink.on('click', function () {
    if (hamburgerBtn.hasClass('open')) {
      hamburgerBtn.removeClass('open')
      navigationMenu.slideUp(400, function () {
        $(this).removeAttr('style')
      })
    }
  })
}
