
// mobile menu
const selectIcon = document.querySelector('#select');
const navbarMenu = document.querySelector('#nav-links');

selectIcon.addEventListener('click', () => {
  navbarMenu.classList.toggle('is-active');
});

// Get all dropdowns on the page that aren't hoverable.
const dropdowns = document.querySelectorAll('.dropdown:not(.is-hoverable)');

if (dropdowns.length > 0) {
  // For each dropdown, add event handler to open on click.
  dropdowns.forEach(function(el) {
    el.addEventListener('click', function(e) {
      e.stopPropagation();
      el.classList.toggle('is-active');
    });
  });

  // If user clicks outside dropdown, close it.
  document.addEventListener('click', function(e) {
    closeDropdowns();
  });
}

/*
 * Close dropdowns by removing `is-active` class.
 */
function closeDropdowns() {
  dropdowns.forEach(function(el) {
    el.classList.remove('is-active');
  });
}