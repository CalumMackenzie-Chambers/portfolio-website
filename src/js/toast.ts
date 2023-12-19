export function displayToast(message: string): void {
  const toast = document.getElementById('toast');
  if (toast) {
    toast.classList.remove('!hidden', '!opacity-0')
    toast.textContent = message;

    setTimeout(() => {
      fadeOutHide(toast);
    }, 10000);
  }
}

function fadeOutHide(element: HTMLElement): void {
  element.classList.add('!opacity-0');

  setTimeout(() => {
    element.classList.add('!hidden');
    element.textContent = '';
  }, 1000);
}

