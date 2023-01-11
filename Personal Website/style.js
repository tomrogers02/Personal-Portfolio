const toggle = document.getElementById('toggle-dark');
const body = document.querySelector('body');
const navStickyBar = document.querySelector('header');
var navLinks = document.getElementsByClassName("nav-links");
const heroSecondTitle = document.getElementById('upper-title');
const heroThirdTitle = document.getElementById('lower-subtitle');
var socialLinksHero = document.getElementsByClassName('bi');
const leftHeroLine = document.getElementById('social-line');
const emailAddress = document.getElementById('email');
const navBottom = document.getElementById('nav-mobile-bottom');
const navMiddle = document.getElementById('nav-right');
const navTop = document.getElementById('nav-left');





toggle.addEventListener('click', function () {
  this.classList.toggle('bi-sunset-fill');

  if (this.classList.toggle('bi-brightness-high-fill')) {
    body.style.background = '#f5f5f5';
    body.style.color = 'black';
    body.style.transition = '2s';
    navStickyBar.style.background = '#f5f5f5';
    heroSecondTitle.style.color = ' black'
    heroThirdTitle.style.color = 'black';
    emailAddress.style.color = 'black';
    navBottom.style.background = '#E5E5E5';
    navMiddle.style.background = '#F5F5F5';
    navTop.style.background = '#f5f5f5';


    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].style.color = "black";
    }

    for (var i = 0; i < socialLinksHero.length; i++) {
      socialLinksHero[i].style.color = "black";
    }
    s






  } else {
    body.style.background = '#222229';
    body.style.color = 'white';
    body.style.transition = '2s';

    navStickyBar.style.background = '#222229';
    heroSecondTitle.style.color = ' #c6c6c6'
    heroThirdTitle.style.color = '#c6c6c6';
    emailAddress.style.color = 'white'
    navBottom.style.background = '#45455a';
    navMiddle.style.background = '#222229';
    navTop.style.background = '#222229';
    toggle.style.color = 'white'

    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].style.color = "white";
    }

    for (var i = 0; i < socialLinksHero.length; i++) {
      socialLinksHero[i].style.color = "white";
    }
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