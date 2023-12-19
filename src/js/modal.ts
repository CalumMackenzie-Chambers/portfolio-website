import { displayToast } from './toast';

export function loadModal(url: string): void {
  fetch(url)
  .then(response => response.text())
  .then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    setModalTitle(doc);
    incrementHeaderLevels(doc);
    setModalContent(doc);
    document.addEventListener('keydown', handleEscapeKey);
  })
  .catch(_ => displayToast("Could not load content, try accessing the URL directly."))
}

export function closeModal(): void {
  const overlay = document.getElementById('modal-overlay')
  document.body.classList.remove('overflow-hidden')
  document.removeEventListener('keydown', handleEscapeKey);

  if (overlay) {
    overlay.outerHTML = `
    <div id="modal-overlay" class="hidden fixed inset-0 bg-black bg-opacity-50 h-full w-full px-6 justify-center items-center z-50" onclick="app.closeModal()">
      <div id="modal" class="my-auto px-6 shadow-lg dark:shadow-black border rounded bg-base-background bg-opacity-100 max-h-[calc(100%-9rem)] overflow-y-auto overscroll-contain relative" onclick="event.stopPropagation()">
        <div class="sticky top-0 -inset-x-6 -mx-6 px-6 flex justify-between py-4 bg-base-background border-b space-x-4 mb-4 items-center">
          <h2 id="modal-title" class="text-2xl font-bold text-base-foreground">Modal Title</h2>
          <button id="modal-close" class="text-2xl rounded-full h-5 w-5 flex justify-center items-center text-base-foreground hover:bg-danger transition-colors duration-200 focus:outline-none" onclick="app.closeModal()">&times;</button>
        </div>
        <div id="modal-content"></div>
        <div class="border-t py-4 text-center -mx-6 px-6 mt-4">
          <p class="text-muted-foreground text-sm">© 2023 Calum Mackenzie-Chambers. All rights reserved.</p>
        </div>
      </div>
    </div>`
  }
}

function handleEscapeKey(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

function setModalTitle(doc: Document): void {
  const title = doc.querySelector('h1')?.textContent || 'Modal'
  const modalTitle = document.getElementById('modal-title')
  if (modalTitle) {
    modalTitle.textContent = title
  }
  doc.querySelector('h1')?.remove()
}

function incrementHeaderLevels(doc: Document): void {
  ['h5', 'h4', 'h3', 'h2', 'h1'].forEach(tag => {
    doc.querySelectorAll(tag).forEach(header => {
      const newHeaderLevel = parseInt(header.tagName[1] as string) + 1;
      const newHeader = document.createElement(`h${newHeaderLevel}`);
      newHeader.innerHTML = header.innerHTML;
      newHeader.className = header.className;
      header.parentNode?.replaceChild(newHeader, header);
    });
  });
}

function setModalContent(doc: Document): void {
  const modalContent = document.getElementById('modal-content')
  const modalOverlay = document.getElementById('modal-overlay')

  if (modalContent && modalOverlay) {
    modalContent.innerHTML = doc.getElementById('main')?.innerHTML || ''
    modalOverlay.classList.remove('hidden')
    modalOverlay.classList.add('flex')
    document.body.classList.add('overflow-hidden')
  }
}

