import {BODY, ACTIVE} from '../constants';

$('.js-dropdown').each((i, container) => {
  container = $(container);
  const control = container.find('.js-dropdown-control');
  const items = container.find('.js-dropdown-item');
  control.on('click', e => {
  	container.toggleClass(ACTIVE);
  });
});

$(document).on('click', e => {
  if ($(e.target).closest('.js-dropdown').length) return;
  $('.js-dropdown').removeClass(ACTIVE);
});
