const menuBtn = document.querySelector('.nav-menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

document.querySelector(".nav-menu-btn").addEventListener("click", () => {
  document.querySelector(".side-nav-menu").classList.toggle("show");
});

ScrollReveal().reveal('.nav-main', { delay: 200 });
ScrollReveal().reveal('.nav-menu', { delay: 300 });
ScrollReveal().reveal('.landing-banner', { delay: 300 });
ScrollReveal().reveal('.landing-banner', { delay: 200 });

ScrollReveal().reveal('.panels', { delay: 200 });