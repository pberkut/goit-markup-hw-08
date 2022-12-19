//  Script for console log
(() => {
  document.querySelector('.register-form').addEventListener('submit', e => {
    e.preventDefault();
    new FormData(e.currentTarget).forEach((value, name) => console.log(`${name}: ${value}`));
    e.currentTarget.reset();
  });
})();
