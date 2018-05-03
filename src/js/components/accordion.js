import { ACTIVE } from '../constants';

$('.js-accordion').each((i, container) => {
  container = $(container);
  const control = container.find('.js-accordion-control');
  const collapse = container.find('.js-accordion-collapse');

  control.on('click', e => {
    e.preventDefault();
    control.toggleClass(ACTIVE);
    collapse.slideToggle(500);
  });
});
