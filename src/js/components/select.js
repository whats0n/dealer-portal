import {OPEN, ACTIVE} from '../constants';

const selects = $('[data-select]');
const BODY = $('body');

selects.each((i, select) => {
  select = $(select);
  const otherSelects = selects.not(select);
  const value = select.find('[data-select-value]');
  const options = select.find('[data-select-option]');
  const active = options.filter(`.${ACTIVE}`).length ? options.filter(`.${ACTIVE}`) : options.first();

  value.on('click', e => {
    otherSelects.removeClass(OPEN);
    select.toggleClass(OPEN);
  });
  value.text(active.text());
  active.addClass(ACTIVE);

  options.each((i, option) => {
    option = $(option);
    const otherOptions = options.not(option);
    const text = option.text();

    option.on('click', e => {
      select.removeClass(OPEN);
      otherOptions.removeClass(ACTIVE);
      option.addClass(ACTIVE);
      value.text(text);
    });
  });
});

BODY.on('click', e => {
  if ($(e.target).closest(selects).length || !selects.hasClass(OPEN)) return;
  selects.removeClass(OPEN);
});
