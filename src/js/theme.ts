export function setupThemeToggle(): void {
  const toggleButton = document.getElementById('theme-toggle') as HTMLElement;

  if (localStorage.getItem('color-theme') === 'light') {
    theme('light', toggleButton);
  } else {
    theme('dark', toggleButton);
  }
}

export function themeToggle(toggleButton: HTMLElement): void {
  if (document.documentElement.classList.contains('dark')) {
    theme('light', toggleButton);
  } else {
    theme('dark', toggleButton);
  }
}

const darkIcon = document.getElementById('dark-icon');
const lightIcon = document.getElementById('light-icon');
const toggleLabel = document.getElementById('theme-toggle-label');

type Theme = 'light' | 'dark';

function theme(theme: Theme, toggleButton: HTMLElement): void {
  if (theme === 'light') {
    document.documentElement.classList.remove('dark');
    darkIcon?.classList.remove('hidden');
    lightIcon?.classList.add('hidden');
    toggleButton.title = 'Switch to Dark Mode'
    if (toggleLabel) {
      toggleLabel.textContent = 'Dark Mode';
    }
    localStorage.setItem('color-theme', 'light');
  } else {
    document.documentElement.classList.add('dark');
    darkIcon?.classList.add('hidden');
    lightIcon?.classList.remove('hidden');
    toggleButton.title = 'Switch to Light Mode'
    if (toggleLabel) {
      toggleLabel.textContent = 'Light Mode';
    }
    localStorage.setItem('color-theme', 'dark');
  }
}
