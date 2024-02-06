const WIN_WIDTH_FOR_BURGER_MENU = 576;

window.addEventListener('resize', () => {
  const burgerButton = document.querySelector('.burger');

  if (document.documentElement.clientWidth > WIN_WIDTH_FOR_BURGER_MENU) {
    burgerButton.setAttribute('inert', true);
  } else {
    burgerButton.removeAttribute('inert');
  }
})

