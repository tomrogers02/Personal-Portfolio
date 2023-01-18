const toggle = document.getElementById('toggle-dark');
const body = document.querySelector('body');
const navStickyBar = document.querySelector('header');
const navLinks = document.querySelectorAll(".nav-links");
const heroSecondTitle = document.getElementById('upper-title');
const heroThirdTitle = document.getElementById('lower-subtitle');
const socialLinksHero = document.querySelectorAll('.bi');
const leftHeroLine = document.getElementById('social-line');
const emailAddress = document.getElementById('email');
const navBottom = document.getElementById('nav-mobile-bottom');
const navMiddle = document.getElementById('nav-right');
const navTop = document.getElementById('nav-left');
const projectCard = document.querySelectorAll(".left-project");
const testimonials = document.getElementById('testimonials');
const testReview = document.getElementById('test-right');
const skillCard = document.querySelectorAll('.skill-square,.project-flex-box');

let isDark = false;

toggle.addEventListener('click', function () {
  this.classList.toggle('bi-sunset-fill');
  isDark = !isDark;
  body.style.background = isDark ? '#222229' : '#f5f5f5';
  body.style.color = isDark ? 'white' : 'black';
  body.style.transition = '2s';
  navStickyBar.style.background = isDark ? '#222229' : '#f5f5f5';
  heroSecondTitle.style.color = isDark ? '#c6c6c6' : 'black';
  heroThirdTitle.style.color = isDark ? '#c6c6c6' : 'black';
  emailAddress.style.color = isDark ? 'white' : 'black';
  navBottom.style.background = isDark ? '#45455a' : '#E5E5E5';
  navMiddle.style.background = isDark ? '#222229' : '#F5F5F5';
  navTop.style.background = isDark ? '#222229' : '#f5f5f5';
  testimonials.style.background = isDark ? '#45455a' : '#A3A3B2';
  testReview.style.background = isDark ? '#3F3F50' : '#9292A0';

  navLinks.forEach(link => link.style.color = isDark ? "white" : "black");
  socialLinksHero.forEach(link => link.style.color = isDark ? "white" : "black");
  projectCard.forEach(card => card.style.background = isDark ? "#45455a" : "#A3A3B2");
  skillCard.forEach(card => card.style.background = isDark ? "#45455a" : "#A3A3B2");
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