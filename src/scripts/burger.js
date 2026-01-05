const burgerBtn = document.querySelector('.burger')
const body = document.querySelector('#body')
const activeNav = document.querySelector('.header__nav')

burgerBtn.addEventListener('click', () => {
  activeNav.classList.toggle('active')
  burgerBtn.classList.toggle('active')
  body.classList.toggle('overflow')
})
