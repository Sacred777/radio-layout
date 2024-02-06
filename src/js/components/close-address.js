(function () {
  const closeAddressBtn = document.querySelector('.address__close-btn');
  const address = document.querySelector('.address');

  closeAddressBtn.addEventListener('click', () => {
    address.classList.add('address--invisible');
    closeAddressBtn.setAttribute('inert', true);
  })
})()
