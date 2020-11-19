// Update localStorage with color theme, based on prefers-color-scheme
if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.querySelector('html').classList.add('dark')
} else if (localStorage.theme === 'dark') {
  document.querySelector('html').classList.add('dark')
}
