
// mobile menu
const selectIcon = document.querySelector('#select');
const navbarMenu = document.querySelector('#nav-links');

selectIcon.addEventListener('click', () => {
  navbarMenu.classList.toggle('is-active');
});