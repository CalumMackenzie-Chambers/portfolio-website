import {
  toggleHamburgerIcon,
  closeMenu,
  resetHamburgerIcon,
  setTheme,
  initEventListeners,
} from "../../../../src/components/Header/Header";

describe("Header", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  // -------------------------- toggleHamburgerIcon -------------------------- //
  describe("toggleHamburgerIcon", () => {
    const bar1 = document.createElement("div");
    const bar2 = document.createElement("div");
    const bar3 = document.createElement("div");

    test("toggles 'transform' class for bar1 and bar3", () => {
      toggleHamburgerIcon(bar1, bar2, bar3);
      expect(bar1.classList.contains("transform")).toBeTruthy();
      expect(bar3.classList.contains("transform")).toBeTruthy();

      toggleHamburgerIcon(bar1, bar2, bar3);
      expect(bar1.classList.contains("transform")).toBeFalsy();
      expect(bar3.classList.contains("transform")).toBeFalsy();
    });

    test("toggles '-rotate-45' class for bar1", () => {
      toggleHamburgerIcon(bar1, bar2, bar3);
      expect(bar1.classList.contains("-rotate-45")).toBeTruthy();

      toggleHamburgerIcon(bar1, bar2, bar3);
      expect(bar1.classList.contains("-rotate-45")).toBeFalsy();
    });

    test("toggles 'top-1/2' class for bar1 and bar3", () => {
      toggleHamburgerIcon(bar1, bar2, bar3);
      expect(bar1.classList.contains("top-1/2")).toBeTruthy();
      expect(bar3.classList.contains("top-1/2")).toBeTruthy();

      toggleHamburgerIcon(bar1, bar2, bar3);
      expect(bar1.classList.contains("top-1/2")).toBeFalsy();
      expect(bar3.classList.contains("top-1/2")).toBeFalsy();
    });

    test("toggles 'opacity-0' class for bar2", () => {
      toggleHamburgerIcon(bar1, bar2, bar3);
      expect(bar2.classList.contains("opacity-0")).toBeTruthy();

      toggleHamburgerIcon(bar1, bar2, bar3);
      expect(bar2.classList.contains("opacity-0")).toBeFalsy();
    });

    test("toggles 'rotate-45' class for bar3", () => {
      toggleHamburgerIcon(bar1, bar2, bar3);
      expect(bar3.classList.contains("rotate-45")).toBeTruthy();

      toggleHamburgerIcon(bar1, bar2, bar3);
      expect(bar3.classList.contains("rotate-45")).toBeFalsy();
    });

    test("toggles 'top-6' class for bar3", () => {
      toggleHamburgerIcon(bar1, bar2, bar3);
      expect(bar3.classList.contains("top-6")).toBeTruthy();

      toggleHamburgerIcon(bar1, bar2, bar3);
      expect(bar3.classList.contains("top-6")).toBeFalsy();
    });
  });

  // ------------------------------ closeMenu ------------------------------- //
  test("closeMenu", () => {
    const mockBody = document.createElement("div");
    const mockMenu = document.createElement("div");

    mockBody.classList.add("overflow-hidden");
    mockMenu.classList.add("menu-open");

    closeMenu(mockBody, mockMenu);

    expect(mockBody.classList.contains("overflow-hidden")).toBeFalsy();
    expect(mockMenu.classList.contains("menu-open")).toBeFalsy();
    expect(mockMenu.classList.contains("menu-closed")).toBeTruthy();
  });

  // -------------------------- resetHamburgerIcon -------------------------- //
  describe("resetHamburgerIcon", () => {
    const bar1 = document.createElement("div");
    const bar2 = document.createElement("div");
    const bar3 = document.createElement("div");

    beforeEach(() => {
      bar1.className = "transform -rotate-45 top-1/2";
      bar2.className = "opacity-0";
      bar3.className = "transform rotate-45 top-1/2 top-6";
    });

    test("removes 'transform' class from bar1 and bar3", () => {
      resetHamburgerIcon(bar1, bar2, bar3);
      expect(bar1.classList.contains("transform")).toBeFalsy();
      expect(bar3.classList.contains("transform")).toBeFalsy();
    });

    test("removes '-rotate-45' class from bar1", () => {
      resetHamburgerIcon(bar1, bar2, bar3);
      expect(bar1.classList.contains("-rotate-45")).toBeFalsy();
    });

    test("removes 'top-1/2' class from bar1 and bar3", () => {
      resetHamburgerIcon(bar1, bar2, bar3);
      expect(bar1.classList.contains("top-1/2")).toBeFalsy();
      expect(bar3.classList.contains("top-1/2")).toBeFalsy();
    });

    test("removes 'rotate-45' class from bar3", () => {
      resetHamburgerIcon(bar1, bar2, bar3);
      expect(bar3.classList.contains("rotate-45")).toBeFalsy();
    });

    test("removes 'opacity-0' class from bar2", () => {
      resetHamburgerIcon(bar1, bar2, bar3);
      expect(bar2.classList.contains("opacity-0")).toBeFalsy();
    });

    test("adds 'top-6' class to bar3", () => {
      resetHamburgerIcon(bar1, bar2, bar3);
      expect(bar3.classList.contains("top-6")).toBeTruthy();
    });
  });

  // ------------------------------ setTheme ------------------------------- //
  describe("setTheme", () => {
    const mockHtmlElement = document.createElement("html");
    const mockToggleLg = document.createElement("input");
    const mockToggleMobile = document.createElement("input");

    test("sets dark theme correctly", () => {
      setTheme("dark", mockHtmlElement, mockToggleLg, mockToggleMobile);

      expect(mockHtmlElement.classList.contains("dark")).toBeTruthy();
      expect(localStorage.getItem("theme")).toEqual("dark");
      expect(mockToggleLg.checked).toBeTruthy();
      expect(mockToggleMobile.checked).toBeTruthy();
    });

    test("sets light theme correctly", () => {
      setTheme("light", mockHtmlElement, mockToggleLg, mockToggleMobile);

      expect(mockHtmlElement.classList.contains("dark")).toBeFalsy();
      expect(localStorage.getItem("theme")).toEqual("light");
      expect(mockToggleLg.checked).toBeFalsy();
      expect(mockToggleMobile.checked).toBeFalsy();
    });
  });

  // -------------------------- initEventListeners -------------------------- //
  describe("initEventListeners", () => {
    let menuButton: HTMLElement;
    let toggleLg: HTMLElement;
    let toggleMobile: HTMLElement;
    let mockNavLinks: HTMLElement[];

    beforeEach(() => {
      document.body.innerHTML = `
        <div>
          <button id="hamburger-menu"></button>
          <nav></nav>
          <div id="bar1"></div>
          <div id="bar2"></div>
          <div id="bar3"></div>
          <input id="darkmode-toggle-lg">
          <input id="darkmode-toggle-mobile">
          <a class="nav-link"></a>
          <a class="nav-link"></a>
          <a class="nav-link"></a>
        </div>
      `;

      menuButton = document.getElementById("hamburger-menu")!;
      toggleLg = document.getElementById("darkmode-toggle-lg")!;
      toggleMobile = document.getElementById("darkmode-toggle-mobile")!;

      const navLink1 = document.createElement("a");
      navLink1.classList.add("nav-link");
      const navLink2 = document.createElement("a");
      navLink2.classList.add("nav-link");
      const navLink3 = document.createElement("a");
      navLink3.classList.add("nav-link");

      mockNavLinks = [navLink1, navLink2, navLink3];
      const mockNavLinksNodeList = Array.from(
        { length: mockNavLinks.length },
        (_, index) => mockNavLinks[index],
      ) as unknown as NodeListOf<Element>;

      jest.spyOn(document, "querySelectorAll").mockImplementation((selector) => {
        if (selector === ".nav-link") return mockNavLinksNodeList;
        return document.createElement("div").querySelectorAll(selector);
      });
    });

    test("adds event listener for menu button click", () => {
      const addEventListenerSpy = jest.spyOn(menuButton, "addEventListener");
      initEventListeners();
      expect(addEventListenerSpy).toHaveBeenCalledWith("click", expect.any(Function));
    });

    test("adds event listener for nav links click", () => {
      const addEventListenerSpy1 = jest.spyOn(mockNavLinks[0], "addEventListener");
      const addEventListenerSpy2 = jest.spyOn(mockNavLinks[1], "addEventListener");
      const addEventListenerSpy3 = jest.spyOn(mockNavLinks[2], "addEventListener");

      initEventListeners();

      expect(addEventListenerSpy1).toHaveBeenCalledWith("click", expect.any(Function));
      expect(addEventListenerSpy2).toHaveBeenCalledWith("click", expect.any(Function));
      expect(addEventListenerSpy3).toHaveBeenCalledWith("click", expect.any(Function));
    });

    test("adds event listener for window resize", () => {
      const addEventListenerSpy = jest.spyOn(window, "addEventListener");
      initEventListeners();
      expect(addEventListenerSpy).toHaveBeenCalledWith("resize", expect.any(Function));
    });

    test("adds event listener for dark mode toggle on mobile", () => {
      const addEventListenerSpy = jest.spyOn(toggleMobile, "addEventListener");
      initEventListeners();
      expect(addEventListenerSpy).toHaveBeenCalledWith("change", expect.any(Function));
    });

    test("adds event listener for dark mode toggle on large screens", () => {
      const addEventListenerSpy = jest.spyOn(toggleLg, "addEventListener");
      initEventListeners();
      expect(addEventListenerSpy).toHaveBeenCalledWith("change", expect.any(Function));
    });
  });
});
