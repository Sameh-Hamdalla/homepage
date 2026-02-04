// =======================
// ABOUT TOGGLE
// =======================
const aboutTitle = document.querySelector(".home-about h2");
const aboutText = document.querySelector(".home-about p");

if (aboutTitle && aboutText) {
  aboutText.style.display = "none";
  let visible = false;

  aboutTitle.addEventListener("click", () => {
    aboutText.style.display = visible ? "none" : "block";
    visible = !visible;
  });
}

// =======================
// SKILLS TOGGLE
// =======================
const skillsTitle = document.querySelector(".home-skills h2");
const skillsText = document.querySelector(".home-skills p");
const skillsList = document.querySelector(".home-skills ul");

if (skillsTitle && skillsText && skillsList) {
  skillsText.style.display = "none";
  skillsList.style.display = "none";
  let visible = false;

  skillsTitle.addEventListener("click", () => {
    skillsText.style.display = visible ? "none" : "block";
    skillsList.style.display = visible ? "none" : "block";
    visible = !visible;
  });
}

// =======================
async function loadProjects() {
  const section = document.querySelector(".home-projects");
  if (!section) return;

  const title = section.querySelector("h2");
  if (!title) return;

  let visible = false;
  const elements = [];

  // CLICK LISTENER SOFORT
  title.addEventListener("click", () => {
    elements.forEach((el) => {
      el.style.display = visible ? "none" : "block";
    });
    visible = !visible;
  });

  // DATA LOAD SPÄTER
  const isEnglish = window.location.pathname.includes("index-en");
  const jsonFile = isEnglish ? "projects-en.json" : "projects.json";

  const response = await fetch(jsonFile);
  const projects = await response.json();

  projects.forEach((project) => {
    const div = document.createElement("div");
    div.className = "project-preview";
    div.style.display = "none";

    div.innerHTML = `
      <h3>${project.title}</h3>
      <p style="display:none;">${project.description}</p>
    `;

    div.querySelector("h3").onclick = () => {
      const p = div.querySelector("p");
      p.style.display = p.style.display === "none" ? "block" : "none";
    };

    section.appendChild(div);
    elements.push(div);
  });
}

loadProjects();

// =======================
// SCROLL TO TOP
// =======================
const scrollTopBtn = document.querySelector("#scrollTopBtn");

window.addEventListener("scroll", () => {
  scrollTopBtn.style.display = window.scrollY > 10 ? "block" : "none";
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
