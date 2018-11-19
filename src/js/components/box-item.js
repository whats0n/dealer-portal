const EDIT = 'is-edit';
const OPEN = 'is-open';
const HIDDEN = 'is-hidden';

const types = $('.js-item-types');

$('.js-box-item').each((i, container) => {
  container = $(container);
  const field = container.find('.js-box-item-field');
  const input = container.find('.js-box-item-input');
  const submit = container.find('.js-box-item-submit');
  const edit = container.find('.js-box-item-edit');
  const title = container.find('.js-box-item-title');

  container.click(e => {
    if ($(e.target).closest('.js-box-item-prevent').length) return;
    types.addClass(OPEN);
    const containerTop = container.offset().top;
    const containerLeft = container.offset().left;
    const containerWidth = container.outerWidth();
    types.css({
      top: `${containerTop}px`,
      left: `${containerLeft + containerWidth/2}px`
    });
    setTimeout(() => {
      types
        .find('.js-item-types-input')
        .focus();
    }, 300);
  });

  edit.click(e => {
    e.preventDefault();
    input.val(title.text());
    container.addClass(EDIT);
  });

  submit.click(e => {
    e.preventDefault();
    title.text(input.val());
    container.removeClass(EDIT);
  });
});

types.each((i, container) => {
  container = $(container);
  const input = container.find('.js-item-types-input');
  const items = container.find('.js-item-types-item');

  input.on('input', e => {
    const val = input.val();
    if (!val.length) {
      items.removeClass(HIDDEN);
      return;
    }
    items.each((i, item) => {
      item = $(item);
      if (item
        .text()
        .toLowerCase()
        .includes(val.toLowerCase())
      ) {
        item.removeClass(HIDDEN);
      } else {
        item.addClass(HIDDEN);
      }
    });
  });

  items.click(e => container.removeClass(OPEN));
});

$(document).on('click', e => {
  if ($(e.target).closest('.js-item-types').length || $(e.target).closest('.js-box-item').length || !types.hasClass(OPEN)) return;
  types.removeClass(OPEN);
});
