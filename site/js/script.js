// Theme toggle (dark is default; remembers choice in localStorage)
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

function setTheme(theme) {
    const isLight = theme === 'light';

    if (isLight) {
        root.setAttribute('data-theme', 'light');
    } else {
        root.removeAttribute('data-theme');
    }

    if (themeToggle) {
        themeToggle.textContent = isLight ? 'Dark Mode' : 'Light Mode';
        themeToggle.setAttribute('aria-pressed', isLight);
    }
}

const savedTheme = localStorage.getItem('theme') || 'dark';
setTheme(savedTheme);

if (themeToggle) {
    themeToggle.addEventListener('click', function () {
        const currentTheme =
            root.getAttribute('data-theme') === 'light'
                ? 'light'
                : 'dark';

        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        localStorage.setItem('theme', newTheme);
        setTheme(newTheme);
    });
}
// Hamburger menu (mobile nav)
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');

if (navToggle && siteNav) {
    navToggle.addEventListener('click', function () {
        const isOpen = siteNav.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', isOpen);
    });
}

// Contact form validation
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const status = document.getElementById('form-status');
    status.classList.remove('error', 'success');

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
      status.textContent = 'Please fill out every field before sending.';
        status.classList.add('error');
      return;
    }

    if (!emailPattern.test(email)) {
      status.textContent = 'That email address doesn\'t look right — double check it.';
        status.classList.add('error');
      return;
    }

    // This is a static site with no backend, so there's nothing to send to yet.
    // Swap this block out for a real submit (e.g. to Formspree or your own API)
    // once you're ready to accept live messages.
    status.textContent = 'Thanks, ' + name.split(' ')[0] + ' — form looks good. (Hook this up to Formspree or a backend to actually send it.)';
      status.classList.add('success');
  });
}
