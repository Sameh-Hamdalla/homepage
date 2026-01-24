// Elemente holen
const aboutTitle = document.querySelector(".home-about h2");
const aboutText = document.querySelector(".home-about p");

// Prüfen, ob Elemente existieren
if (aboutTitle && aboutText) {
  // Startzustand: Text ist NICHT sichtbar
  aboutText.style.display = "none";

  let textIstSichtbar = false;

  // Klick-Event
  aboutTitle.addEventListener("click", function () {
    if (textIstSichtbar) {
      aboutText.style.display = "none";
      textIstSichtbar = false;
    } else {
      aboutText.style.display = "block";
      textIstSichtbar = true;
    }
  });
}

// ###############################################

const homeSkillSection = document.querySelector(".home-skills h2");
const skillText = document.querySelector(".home-skills p");
const skillList = document.querySelector(".home-skills ul");

if (homeSkillSection && skillText && skillList) {
  // Startzustand: alles ausgeblendet
  skillText.style.display = "none";
  skillList.style.display = "none";

  let skillsVisible = false;

  homeSkillSection.addEventListener("click", function () {
    if (skillsVisible) {
      skillText.style.display = "none";
      skillList.style.display = "none";
      skillsVisible = false;
    } else {
      skillText.style.display = "block";
      skillList.style.display = "block";
      skillsVisible = true;
    }
  });
}

// ###############################################

/***************************************************************
 *  PROJECTS (2 Ebenen) – Schritt für Schritt erklärt
 *  1) Startzustand:
 *     - Man sieht NUR "Ausgewählte Projekte" (h2)
 *     - Die beiden Projekte (InventarManager, Portfolio) sind NICHT sichtbar
 *     - Die Texte (p) sind auch NICHT sichtbar
 *
 *  2) Klick auf "Ausgewählte Projekte" (h2):
 *     - Die beiden Projekt-Boxen erscheinen (h3-Titel werden sichtbar)
 *
 *  3) Klick auf einen Projekttitel (h3):
 *     - NUR der Text (p) dieses Projekts wird ein-/ausgeblendet
 *
 *  Wichtig:
 *  - Wir ändern KEIN HTML
 *  - Wir benutzen querySelector / querySelectorAll sauber
 *  - Keine Index-Spielerei (p[1], p[2]) -> robust, auch wenn du mehr Projekte hinzufügst
 ***************************************************************/

/**********************
 * 1) Elemente finden
 **********************/

// 1.1) Das ist die Überschrift "Ausgewählte Projekte" (h2)
// Diese Überschrift steuert Ebene 1 (Projekt-Boxen zeigen/verstecken)
const projectsTitle = document.querySelector(".home-projects h2");

// 1.2) Alle Projekt-Boxen holen (jede Box = ein Projekt)
// In deinem HTML sind das die <div class="project-preview"> ... </div>
// querySelectorAll liefert eine Liste (NodeList) mit 0, 1, 2, ... Elementen.
const projectPreviews = document.querySelectorAll(
  ".home-projects .project-preview",
);

/*******************************************************
 * 2) Sicherheitsprüfung
 *    Damit JS NICHT crasht, wenn etwas nicht gefunden wird
 *******************************************************/
if (projectsTitle && projectPreviews.length > 0) {
  /*******************************************************
   * 3) Startzustand (bei Seiten-Laden):
   *    - alle project-preview Boxen ausblenden
   *    - und zusätzlich: deren Texte (p) ausblenden
   *******************************************************/
  projectPreviews.forEach(function (project) {
    // project ist jeweils EINE Projekt-Box (div.project-preview)

    // 3.1) Ganze Projekt-Box ausblenden (dadurch sieht man h3 + p nicht)
    // Ergebnis: Am Anfang sieht man nur die h2 Überschrift
    project.style.display = "none";

    // 3.2) Jetzt holen wir uns den Text <p> INNERHALB dieser Projekt-Box
    // project.querySelector(...) sucht NUR innerhalb dieses Projekts
    const text = project.querySelector("p");

    // Sicherstellen, dass p existiert (normalerweise ja)
    if (text) {
      // Text ausblenden
      text.style.display = "none";
    }
  });

  /*******************************************************
   * 4) Zustand merken:
   *    projectsVisible = false bedeutet:
   *    "Projekt-Boxen sind aktuell versteckt"
   *******************************************************/
  let projectsVisible = false;

  /*******************************************************
   * 5) Ebene 1: Klick auf "Ausgewählte Projekte" (h2)
   *    - zeigt oder versteckt alle Projekt-Boxen
   *******************************************************/
  projectsTitle.addEventListener("click", function () {
    // Wir gehen alle Projekt-Boxen durch...
    projectPreviews.forEach(function (project) {
      // Wenn projectsVisible gerade TRUE ist, sollen wir verstecken -> "none"
      // Wenn projectsVisible gerade FALSE ist, sollen wir zeigen     -> "block"
      //
      // Dieser Ausdruck:
      // projectsVisible ? "none" : "block"
      // heißt:
      // - wenn projectsVisible true -> "none"
      // - sonst -> "block"
      project.style.display = projectsVisible ? "none" : "block";
    });

    // Danach drehen wir den Zustand um:
    // war false -> wird true
    // war true  -> wird false
    projectsVisible = !projectsVisible;
  });

  /*******************************************************
   * 6) Ebene 2: Klick auf einen Projekttitel (h3)
   *    - zeigt/versteckt NUR den Text dieses Projekts
   *******************************************************/
  projectPreviews.forEach(function (project) {
    // 6.1) Titel (h3) dieses Projekts finden
    const title = project.querySelector("h3");

    // 6.2) Text (p) dieses Projekts finden
    const text = project.querySelector("p");

    // Sicherheitscheck: nur weiter machen, wenn beide existieren
    if (title && text) {
      // 6.3) Wenn man auf den Projekttitel klickt...
      title.addEventListener("click", function () {
        // Wenn text.style.display aktuell "none" ist -> zeigen ("block")
        // sonst -> verstecken ("none")
        //
        // Hinweis:
        // Wir setzen im Startzustand den Text auf "none", damit das sicher funktioniert.
        text.style.display = text.style.display === "none" ? "block" : "none";
      });
    }
  });
} // Ende if (projectsTitle && projectPreviews.length > 0)

// #################################################################

const scrollTopBtn = document.querySelector("#scrollTopBtn");

window.addEventListener("scroll", function () {
  if (window.scrollY > 10) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});
// „Wenn der Button geklickt wird → Funktion ausführen“
scrollTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
