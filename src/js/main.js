import { bannerSlider, testimonialSlider, portfolioSlider } from './modules/sliders.js';
import { filterPortfolio } from './modules/isotope-filter.js';
import { fixedHeader, adaptiveMenu } from './modules/header.js';
import { smoothScrollToSections, goToTop } from './modules/scroll.js';
import { validationContactForm } from './modules/form-validation';
$(document).ready(function () {
  bannerSlider();
  testimonialSlider();
  portfolioSlider();
  filterPortfolio();
  fixedHeader();
  adaptiveMenu();
  smoothScrollToSections();
  goToTop();
  validationContactForm();
})
