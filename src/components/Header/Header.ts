// Function to toggle hamburger icon
export const toggleHamburgerIcon = (bar1: HTMLElement, bar2: HTMLElement, bar3: HTMLElement) => {
  bar1.classList.toggle("transform");
  bar1.classList.toggle("-rotate-45");
  bar1.classList.toggle("top-1/2");

  bar2.classList.toggle("opacity-0");

  bar3.classList.toggle("transform");
  bar3.classList.toggle("rotate-45");
  bar3.classList.toggle("top-1/2");
  bar3.classList.toggle("top-6");
};

// Function to close the mobile menu
export const closeMenu = (body: HTMLElement, menu: HTMLElement) => {
  body.classList.remove("overflow-hidden");
  menu.classList.remove("menu-open");
  menu.classList.add("menu-closed");
};

// Function to reset the hamburger icon
export const resetHamburgerIcon = (bar1: HTMLElement, bar2: HTMLElement, bar3: HTMLElement) => {
  bar1.classList.remove("transform", "-rotate-45", "top-1/2");
  bar2.classList.remove("opacity-0");
  bar3.classList.remove("transform", "rotate-45", "top-1/2");
  bar3.classList.add("top-6");
};

// Function to set the theme
export const setTheme = (
  theme: string,
  htmlElement: HTMLElement,
  toggleLg: HTMLInputElement,
  toggleMobile: HTMLInputElement,
) => {
  if (theme === "dark") {
    htmlElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    htmlElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }

  toggleLg.checked = theme === "dark";
  toggleMobile.checked = theme === "dark";
};

// Function to initialize event listeners
export const initEventListeners = () => {
  const body = document.querySelector("body") as HTMLElement;
  const menuButton = document.getElementById("hamburger-menu") as HTMLElement;
  const menu = document.querySelector("nav") as HTMLElement;

  const bar1 = document.getElementById("bar1") as HTMLElement;
  const bar2 = document.getElementById("bar2") as HTMLElement;
  const bar3 = document.getElementById("bar3") as HTMLElement;

  const toggleLg = document.querySelector("#darkmode-toggle-lg") as HTMLInputElement;
  const toggleMobile = document.querySelector("#darkmode-toggle-mobile") as HTMLInputElement;
  const htmlElement = document.documentElement;

  menuButton.addEventListener("click", () => {
    toggleHamburgerIcon(bar1, bar2, bar3);
    body.classList.toggle("overflow-hidden");
    menu.classList.toggle("menu-closed");
    menu.classList.toggle("menu-open");
  });

  document.querySelectorAll(".nav-link").forEach((navLink) => {
    navLink.addEventListener("click", () => {
      closeMenu(body, menu);
      resetHamburgerIcon(bar1, bar2, bar3);
    });
  });

  window.addEventListener("resize", () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 1024) {
      closeMenu(body, menu);
      resetHamburgerIcon(bar1, bar2, bar3);
    }
  });

  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme, htmlElement, toggleLg, toggleMobile);

  toggleMobile.addEventListener("change", () => {
    const theme = toggleMobile.checked ? "dark" : "light";
    setTheme(theme, htmlElement, toggleLg, toggleMobile);
  });

  toggleLg.addEventListener("change", () => {
    const theme = toggleLg.checked ? "dark" : "light";
    setTheme(theme, htmlElement, toggleLg, toggleMobile);
  });
};

// Initialize event listeners on DOMContentLoaded
document.addEventListener("DOMContentLoaded", initEventListeners);
