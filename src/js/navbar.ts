export function setupNavbar(): void {
  const toggleButton = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!toggleButton || !mobileMenu) {
    return;
  }

  const openIcon = toggleButton.querySelector('.block');
  const closeIcon = toggleButton.querySelector('.hidden');

  function toggleMenu(): void {
    mobileMenu?.classList.toggle('hidden');
    openIcon?.classList.toggle('hidden');
    closeIcon?.classList.toggle('hidden');
  }

  function closeMenu(): void {
    mobileMenu?.classList.add('hidden');
    openIcon?.classList.remove('hidden');
    closeIcon?.classList.add('hidden');
  }

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', toggleMenu);
  });

  document.addEventListener('click', function(event) {
    const target = event.target as Node;
    if (!mobileMenu.contains(target) && !toggleButton.contains(target) && !mobileMenu.classList.contains('hidden')) {
      closeMenu();
    }
  });

  toggleButton.addEventListener('click', toggleMenu);

  window.addEventListener('resize', function() {
    if (window.getComputedStyle(toggleButton).display === 'none' && !mobileMenu.classList.contains('hidden')) {
      closeMenu();
    }
  });
}
