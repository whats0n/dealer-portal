// import {BODY, ACTIVE} from '../constants';

// $('.js-dropdown').each((i, container) => {
//   container = $(container);
//   const control = container.find('.js-dropdown-control');
//   const items = container.find('.js-dropdown-item');
//   control.on('click', e => {
//    container.toggleClass(ACTIVE);
//   });
// });

// $(document).on('click', e => {
//   if ($(e.target).closest('.js-dropdown').length) return;
//   $('.js-dropdown').removeClass(ACTIVE);
// });

$('[data-choose]').each((i, container) => {
  container = $(container);
  const all = container.find('[data-choose-all]');
  const items = container.find('[data-choose-item]');

  
  items.on('change', e => {
    let allChecked = true;
    items.each((i, item) => { if (!$(item).prop('checked')) allChecked = false; });
    all.prop('checked', allChecked);
  });

  all.on('change', e => {
    let allChecked = true;
    items.each((i, item) => { if (!$(item).prop('checked')) allChecked = false; });
    allChecked ? items.prop('checked', false) : items.prop('checked', true);
  });
});
