// Ano no footer
document.getElementById('year').textContent = new Date().getFullYear();

// Nav mobile toggle
const hamburger  = document.getElementById('hamburger');
const navMobile  = document.getElementById('nav-mobile');
const iconMenu   = document.getElementById('icon-menu');
const iconClose  = document.getElementById('icon-close');

hamburger.addEventListener('click', () => {
  const isOpen = navMobile.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
  iconMenu.style.display  = isOpen ? 'none'  : 'block';
  iconClose.style.display = isOpen ? 'block' : 'none';
});

function closeNav() {
  navMobile.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  iconMenu.style.display  = 'block';
  iconClose.style.display = 'none';
}
