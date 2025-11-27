const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".navbar-links");
const overlay = document.getElementById("menuOverlay");

function closeMenu() {
  navLinks.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("menu-open");
  hamburger.classList.remove("active");
}

if (hamburger && navLinks && overlay) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("menu-open");
    hamburger.classList.toggle("active"); // this triggers the X
  });

  overlay.addEventListener("click", closeMenu);
  navLinks.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("nav-link") ||
      e.target.classList.contains("btn")
    ) {
      closeMenu();
    }
  });
}
