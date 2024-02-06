(function () {
  const searchBtn = document.querySelector('.search-btn');
  const searchForm = document.querySelector('.search');
  const closeBnt = document.querySelector('.search__close-btn');

  searchBtn.addEventListener('click', () => {
    searchForm.removeAttribute('inert');
    searchForm.classList.add('search--active');
  })

  closeBnt.addEventListener('click', (e) => {
    e.preventDefault();
    searchForm.classList.remove('search--active');
    searchForm.setAttribute('inert', true);
  })
})()
