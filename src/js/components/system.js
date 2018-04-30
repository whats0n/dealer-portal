import {OPEN, ACTIVE} from '../constants';

$('[data-system-control]').each((i, control) => {
  control = $(control);
  const content = control.siblings('[data-system-content]');

  control.on('click', e => {
    e.preventDefault();
    control.toggleClass(ACTIVE);
    content.toggleClass(OPEN);
  });
});
