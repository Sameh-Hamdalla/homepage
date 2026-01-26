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

// #################################################################
const profilSection = document.querySelector(".profile-intro h1");
const profilText = document.querySelector(".profile-intro p");

if (profilSection && profilText) {
  profilText.style.display = "none";

  let textIstSichtbar = false;

  profilSection.addEventListener("click", function () {
    if (textIstSichtbar) {
      profilText.style.display = "none";
      textIstSichtbar = false;
    } else {
      profilText.style.display = "block";
      textIstSichtbar = true;
    }
  });
}
// #################################################################

// Überschrift "Über mich" auswählen
const aboutMeSection = document.querySelector(".profile-about h2");

// Text unter der Überschrift auswählen
const aboutMeSectionText = document.querySelector(".profile-about p");

// Prüfen, ob beide Elemente existieren (Sicherheitscheck)
if (aboutMeSection && aboutMeSectionText) {
  // Text beim Laden der Seite verstecken
  aboutMeSectionText.style.display = "none";

  // Merkt sich, ob der Text aktuell sichtbar ist
  let textIstSichtbar = false;

  // Klick-Event auf die Überschrift setzen
  aboutMeSection.addEventListener("click", function () {
    // WENN der Text sichtbar ist → verstecken
    if (textIstSichtbar) {
      aboutMeSectionText.style.display = "none";
      textIstSichtbar = false;

      // SONST → Text anzeigen
    } else {
      aboutMeSectionText.style.display = "block";
      textIstSichtbar = true;
    }
  });
}

// #################################################################

// Überschrift der Sektion auswählen
const technicalFocusSection = document.querySelector(".profile-focus h2");

// Text der Sektion auswählen
const technicalFocusText = document.querySelector(".profile-focus  ul");

// Prüfen, ob beide Elemente existieren
if (technicalFocusSection && technicalFocusText) {
  // Text beim Laden der Seite verstecken
  technicalFocusText.style.display = "none";

  // Status-Variable: ist der Text sichtbar?
  let textIstSichtbar = false;

  // Klick-Event auf die ÜBERSCHRIFT
  technicalFocusSection.addEventListener("click", function () {
    if (textIstSichtbar) {
      // Text ausblenden
      technicalFocusText.style.display = "none";
      textIstSichtbar = false;
    } else {
      // Text einblenden
      technicalFocusText.style.display = "block";
      textIstSichtbar = true;
    }
  });
}

// #################################################################

// Überschrift auswählen
const backgroundSection = document.querySelector(".profile-background h2");

// Text auswählen
const backgroundText = document.querySelector(".profile-background p");

// Prüfen, ob beide existieren
if (backgroundSection && backgroundText) {
  // Text beim Laden verstecken
  backgroundText.style.display = "none";

  // Status: sichtbar oder nicht
  let textIstSichtbar = false;

  // Klick auf die Überschrift
  backgroundSection.addEventListener("click", function () {
    if (textIstSichtbar) {
      // Text ausblenden
      backgroundText.style.display = "none";
      textIstSichtbar = false;
    } else {
      // Text einblenden
      backgroundText.style.display = "block";
      textIstSichtbar = true;
    }
  });
}
// / #################################################################

const workStyleSection = document.querySelector(".profile-workstyle h2");
const workStyleText = document.querySelector(".profile-workstyle ul");

if (workStyleSection && workStyleText) {
  workStyleText.style.display = "none";

  let textIstSichtbar = false;

  workStyleSection.addEventListener("click", function () {
    if (textIstSichtbar) {
      workStyleText.style.display = "none";
      textIstSichtbar = false;
    } else {
      workStyleText.style.display = "block";
      textIstSichtbar = true;
    }
  });
}
// / #################################################################
// Überschrift auswählen
const ctaSection = document.querySelector(".profile-cta h2");

// Text auswählen
const ctaText = document.querySelector(".profile-cta p");

if (ctaSection && ctaText) {
  // Text beim Laden ausblenden
  ctaText.style.display = "none";

  let textIstSichtbar = false;

  // Klick auf die Überschrift
  ctaSection.addEventListener("click", function () {
    if (textIstSichtbar) {
      ctaText.style.display = "none";
      ctaSection.innerHTML = "Nächster Schritt ▾";
      textIstSichtbar = false;
    } else {
      ctaText.style.display = "block";
      ctaSection.innerHTML = "Nächster Schritt ▴";
      textIstSichtbar = true;
    }
  });
}
