const toggle = document.getElementById('toggle-dark');
const body = document.querySelector('body');
const navStickyBar = document.querySelector('header');
const navLeft = document.getElementById('nav-left');
const heroTitles = document.querySelectorAll('#upper-title, #lower-subtitle');
const navLinks = document.querySelectorAll(".nav-links, .bi");
const emailAddress = document.getElementById('email');
const navElements = document.querySelectorAll(' #nav-right, #nav-left');
const navPopupElements = document.querySelectorAll('#nav-mobile-bottom');
const cards = document.querySelectorAll('.project-flex-box,#testimonials,.skill-square');
const cardText = document.querySelectorAll('.project-title,.mobile-desc,.desktop-desc,.test-left,.card-body,.test-company-name,.skill-name,.tech-name');
const techName = document.querySelectorAll('.tech-name');
const testCard = document.getElementById('test-right');

toggle.addEventListener('click', function () {
  this.classList.toggle('bi-sunset-fill');

  if (this.classList.toggle('bi-brightness-high-fill')) {
    body.style.background = '#f5f5f5';
    body.style.color = 'black';
    body.style.transition = '2s';
    testCard.style.background = '#D6D6D6'
    navStickyBar.style.background = '#f5f5f5';
    heroTitles.forEach(title => title.style.color = 'black');
    emailAddress.style.color = 'black';
    navElements.forEach(nav => nav.style.background = '#f5f5f5');
    navLinks.forEach(link => link.style.color = 'black');
    cards.forEach(link => link.style.background = '#E5E5E5')
    techName.forEach(link => link.style.color = 'black');
    navPopupElements.forEach(link => link.style.background = '#E5E5E5')

  } else {
    body.style.background = '#222229';
    body.style.color = 'white';
    body.style.transition = '2s';
    testCard.style.background = '#3f3f50'
    navStickyBar.style.background = '#222229';
    heroTitles.forEach(title => title.style.color = '#c6c6c6');
    emailAddress.style.color = 'white';
    navElements.forEach(nav => nav.style.background = '#222229');
    navLinks.forEach(link => link.style.color = 'white');
    cards.forEach(link => link.style.background = '#262630')
    navPopupElements.forEach(link => link.style.background = '#262630')
    techName.forEach(link => link.style.color = 'white');


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