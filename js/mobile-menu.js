

document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".header__btn-menu");
  const headerMenu = document.querySelector(".header__menu");

  function openMenu() {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    headerMenu.classList.add("active");
    menuButton.classList.add("active");
    
  }

  function closeMenu() {
    headerMenu.classList.remove("active");
    menuButton.classList.remove("active");
    
  }

  function toggleMenu() {
    if (headerMenu.classList.contains("active")) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  menuButton.addEventListener("click", toggleMenu);

  window.addEventListener("load", function () {
    if (window.innerWidth < 1108) {
      document.addEventListener("mouseup", function (event) {
        if (
          !headerMenu.contains(event.target) &&
          !menuButton.contains(event.target)
        ) {
          closeMenu();
        }
      });
    }
  });
});

