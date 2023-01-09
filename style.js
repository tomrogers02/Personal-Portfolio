const toggle = document.getElementById('toggle-dark');
const body = document.querySelector('body');
const link = document.getElementsByClassName('nav-links')


toggle.addEventListener('click', function () {
  this.classList.toggle('bi-sunset-fill');

  if (this.classList.toggle('bi-brightness-high-fill')) {
    body.style.background = '#f5f5f5';
    body.style.color = 'black';
    body.style.a.color = 'black';
    body.style.transition = '2s';
    link.style.color = 'black';



  } else {
    body.style.background = '#222229';
    body.style.color = 'white';
    body.style.transition = '2s';
  }
});


const primaryNav = document.getElementById('desktop-nav');
const navToggle = document.getElementById('mobile-cta');
const mobileExit = document.getElementById('mobile-exit');

navToggle.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute('data-visible')

  console.log(visibility);

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
  }

});


mobileExit.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute("data-visible")

  console.log(visibility)

  if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false)
  }

});