if (process.env.NODE_ENV !== 'production') {
  import('./reload');
}
import { handleSubmit } from './form';
import { setupNavbar } from './navbar'
import { setupThemeToggle, themeToggle } from './theme';
import { loadModal, closeModal } from './modal';

document.addEventListener('DOMContentLoaded', () => {
  window.app = { themeToggle, loadModal, closeModal }
  setupNavbar();
  setupThemeToggle();
  document.querySelector("form")?.addEventListener("submit", handleSubmit);
});
