import PerfectScrollbar from 'perfect-scrollbar';

const containers = document.querySelectorAll('[data-scrollbar]');
const watch = [];

Array.prototype.forEach.call(containers, container => watch.push(new PerfectScrollbar(container, {
  wheelPropagation: true
})) );

window.addEventListener('resize', () => watch.forEach(ps => ps.update()));
