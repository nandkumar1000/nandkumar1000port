// for preloader
const loader = () => {
  document.querySelector(".preloader").style.display = "none";
  document.querySelector(".everything").style.display = "block";
}
const preloader = () => {
  setTimeout(loader, Math.floor(Math.random() * 3) + 1000)
}
/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show-menu')
    })
  }
}
showMenu('nav-toggle', 'nav-menu')
/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'
if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}
themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})
document.getElementById('specialization-btn').addEventListener('click', function () {
  document.querySelector('.about-specialisation').classList.add('active');
  document.querySelector('.about-about').classList.remove('active');
  this.classList.add('active');
  document.getElementById('about-btn').classList.remove('active');
});
document.getElementById('about-btn').addEventListener('click', function () {
  document.querySelector('.about-about').classList.add('active');
  document.querySelector('.about-specialisation').classList.remove('active');
  this.classList.add('active');
  document.getElementById('specialization-btn').classList.remove('active');
});
let currentIndex = 0;
function slideRight() {
  const certificates = document.querySelector('.certificates');
  const totalCertificates = certificates.children.length;

  if (currentIndex < totalCertificates - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }

  certificates.style.transform = `translateX(-${currentIndex * 100}%)`;
}
function slideLeft() {
  const certificates = document.querySelector('.certificates');
  const totalCertificates = certificates.children.length;

  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalCertificates - 1;
  }

  certificates.style.transform = `translateX(-${currentIndex * 100}%)`;
}
// smooth scroling.
function smoothScroll(target) {
  const element = document.querySelector(target);
  let targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
  let startPosition = window.pageYOffset;
  let distance = targetPosition - startPosition;
  let duration = 800;
  let start = null;
  function step(timestamp) {
    if (!start) start = timestamp;
    let progress = timestamp - start;
    let percentComplete = Math.min(progress / duration, 1);
    window.scrollTo(0, startPosition + distance * percentComplete);

    if (progress < duration) {
      window.requestAnimationFrame(step);
    }
  }

  window.requestAnimationFrame(step);
}
document.querySelector('#ab').addEventListener('click', () => {
  smoothScroll('#about')
})
document.querySelector('#sk').addEventListener('click', () => {
  smoothScroll('#skills')
})
document.querySelector('#see').addEventListener('click', () => {
  smoothScroll('#services')
})
document.querySelector('#pproj').addEventListener('click', () => {
  smoothScroll('#project')
})
document.querySelector('#co').addEventListener('click', () => {
  smoothScroll('#contact')
})