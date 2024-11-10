// for preloader

const loader = () => {
  document.querySelector(".preloader").style.display = "none";
  document.querySelector(".everything").style.display = "block";
}
const preloader = () => {
  setTimeout(loader, Math.floor(Math.random() * 6) + 1000)
}



/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

  // Validate that variables exist
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      // We add the show-menu class to the div tag with the nav__menu class
      nav.classList.toggle('show-menu')
    })
  }
}
showMenu('nav-toggle', 'nav-menu')

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

// dropdown
// function toggleDropdown() {
//   const dropdown = document.querySelector('.dropdown');
//   dropdown.classList.toggle('show');
// }

// for about togle 
// Toggle between Specialisation and About sections
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



// for project pop model
// function showPopup() {
//   document.getElementById('popup').style.display = 'flex';
// }

// function closePopup() {
//   document.getElementById('popup').style.display = 'none';
// }


// for slide effect 
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
  let duration = 800; // Duration in ms
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

// for small screen 
// for about
document.querySelector('#ab').addEventListener('click', () => {
  smoothScroll('#about')
})
// for skills
document.querySelector('#sk').addEventListener('click', () => {
  smoothScroll('#skills')
})

// for services
document.querySelector('#see').addEventListener('click', () => {
  smoothScroll('#services')
})

// // for projects
document.querySelector('#pproj').addEventListener('click', () => {
  smoothScroll('#project')
})
// for contact
document.querySelector('#co').addEventListener('click', () => {
  smoothScroll('#contact')
})