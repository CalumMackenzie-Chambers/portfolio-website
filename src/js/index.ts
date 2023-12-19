if (process.env.NODE_ENV !== 'production') {
  import('./reload');
}
import { handleSubmit } from './form';
import { setupNavbar } from './navbar'
import { setupThemeToggle, themeToggle } from './theme';

document.addEventListener('DOMContentLoaded', () => {
  setupNavbar();
  setupThemeToggle();
  document.querySelector("form")?.addEventListener("submit", handleSubmit);
  window.app = { themeToggle };
});
