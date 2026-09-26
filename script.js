const menuBtn = document.getElementById('menuBtn');
const navLinks = document.querySelector('.nav-links');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    if (navLinks.style.display === 'flex') {
      navLinks.style.display = 'none';
    } else {
      navLinks.style.display = 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '70px';
      navLinks.style.right = '5%';
      navLinks.style.background = '#faf8f5';
      navLinks.style.padding = '1.5rem';
      navLinks.style.borderRadius = '12px';
      navLinks.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
      navLinks.style.gap = '1.2rem';
    }
  });
        }
