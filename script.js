// JavaScript for the fade-in effect on scroll
window.addEventListener('scroll', fadeInEffect);
window.addEventListener('DOMContentLoaded', fadeInEffect);

function fadeInEffect() {
  const fadeElements = document.querySelectorAll('.fade-in');
  for (let i = 0; i < fadeElements.length; i++) {
    const element = fadeElements[i];
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (elementPosition < windowHeight - 100) {
      element.classList.add('active');
    }
  }
}
