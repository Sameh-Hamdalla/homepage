console.log("menu.js");

const menuBtn = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", function () {
    nav.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    const clickedInside = nav.contains(e.target) || menuBtn.contains(e.target);
    if (!clickedInside) {
      nav.classList.remove("active");
    }
  });
}
