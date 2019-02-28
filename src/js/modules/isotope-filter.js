export function filterPortfolio() {
  $('.js-tabs-container').isotope({
    itemSelector: '.js-tabs-item',
    layoutMode: 'fitRows'
  })

  $('.js-tabs-nav .js-tabs-nav-item').click(function () {
    $('.js-tabs-nav-item').removeClass('tabs-nav__item--active')
    $(this).addClass('tabs-nav__item--active')

    var selector = $(this).attr('data-filter')
    $('.js-tabs-container').isotope({
      filter: selector
    })
    return false
  })
}
