// Mobile sidebar toggle
const sidebar = document.getElementById('sidebar');
const hamb = document.getElementById('hamburger');
hamb.addEventListener('click', () => sidebar.classList.toggle('open'));

// Theme toggle
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Language direction toggle
document.getElementById('lang-toggle').addEventListener('click', () => {
  document.documentElement.dir =
    document.documentElement.dir === 'rtl' ? 'ltr' : 'rtl';
});
