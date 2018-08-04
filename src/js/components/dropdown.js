import {BODY, ACTIVE} from '../constants';

$('.js-dropdown').each((i, container) => {
  container = $(container);
  const control = container.find('.js-dropdown-control');
  const items = container.find('.js-dropdown-item');
  control.click(e => {
    e.preventDefault();
    container.toggleClass(ACTIVE);
  });
  items.click(e => {
    e.preventDefault();
    container.removeClass(ACTIVE);
  });
});

BODY.on('click', e => {
  e.preventDefault();
  if ($(e.target).closest('.js-dropdown').length) return;
  $('.js-dropdown').removeClass(ACTIVE);
});
