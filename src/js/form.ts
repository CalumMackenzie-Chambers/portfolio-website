export function handleSubmit(event: Event): void {
  event.preventDefault();
  const target = event.target;
  if (target == null || !(target instanceof HTMLFormElement)) {
    return;
  }
  const formData = new FormData(target);
  const data = Object.fromEntries(formData.entries()) as Record<string, string>;

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(data).toString(),
  })
  .then(response => handleResponse(response, target, data))
  .catch(() => displayToast("Form submission failed: If this issue persists you can email me directly at calum@mackenzie-chambers.co.uk"))
}

function handleResponse(response: Response, target: HTMLFormElement, data: Record<string, string>): void {
  if (!response.ok) {
    throw new Error("")
  }
  const userName = ` ${data.name}` || '';
  displayOverlay(target, `Thank you for your message${userName}, I'll get back to you as soon as possible!`);
}

function displayOverlay(element: HTMLElement, message: string): void {
  const overlay = document.createElement('div');
  overlay.className = 'text-center h-full w-full inset-0 z-40 absolute bg-base-background/80 flex justify-center items-center sm:text-xl lg:text-2xl font-bold px-8 text-pretty rounded duration-1000 transition-colors text-base-foreground';
  overlay.textContent = message;

  element.prepend(overlay);

  const inputs = element.querySelectorAll('input, textarea, button');
  inputs.forEach(input => input.setAttribute('disabled', 'true'));

  setTimeout(() => {
    overlay.classList.add('text-transparent');
    setTimeout(() => overlay.textContent = '', 1000)
  }, 5000);
}

function displayToast(message: string): void {
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

