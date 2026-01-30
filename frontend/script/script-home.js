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
// PROJECTS (FETCH + 2 LEVELS)
// =======================
async function loadProjects() {
  const response = await fetch("projects.json"); // Browser holt die Datei projects.json
  const projects = await response.json(); // Pack das Paket aus und gib mir das als JSON Datei

  const section = document.querySelector(".home-projects");
  const title = section.querySelector("h2");

  let visible = false;
  const elements = []; // Hier speichern wir später die erzeigten Daten

  projects.forEach((project) => {
    const div = document.createElement("div");
    div.classList.add("project-preview");
    div.style.display = "none";

    div.innerHTML = `
      <h3>${project.title}</h3>
      <p style="display:none;">${project.description}</p>
    `;

    const h3 = div.querySelector("h3");
    const p = div.querySelector("p");

    h3.addEventListener("click", () => {
      p.style.display = p.style.display === "none" ? "block" : "none";
    });

    section.appendChild(div);
    elements.push(div);
  });

  title.addEventListener("click", () => {
    elements.forEach((el) => {
      el.style.display = visible ? "none" : "block";
    });
    visible = !visible;
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
