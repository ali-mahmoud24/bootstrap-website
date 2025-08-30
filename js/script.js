const themeToggleBtn = document.getElementById('themeToggle');
const html = document.documentElement;

// Toggle on click
themeToggleBtn.addEventListener('click', () => {
  const currentTheme =
    html.getAttribute('data-bs-theme') === 'dark' ? 'dark' : 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-bs-theme', newTheme);

  // Switch icon
  themeToggleBtn.innerHTML =
    newTheme === 'dark'
      ? '<i class="bi bi-sun"></i>'
      : '<i class="bi bi-moon"></i>';
});
