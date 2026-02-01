// =======================================
// BACKEND URL KONFIGURATION
// =======================================
// ✅ STANDARD = LOCAL AKTIV
// 👉 Wenn du später auf Render/Online wechseln willst,
// dann diese Zeile auskommentieren
// und die darunter aktivieren.

const API_URL = "http://localhost:8000/api/contact";

// 👉 ALTERNATIVE — Netlify + Render (Online Backend)
// ❗ Nur aktivieren wenn dein Backend online deployed ist
// const API_URL = "https://your-backend.onrender.com/api/contact";

// =======================================
// SCRIPT START
// =======================================

// Warten, bis das komplette HTML geladen ist
document.addEventListener("DOMContentLoaded", function () {
  // Formular über die ID aus dem HTML holen
  const form = document.getElementById("contactForm");

  // Falls das Formular nicht gefunden wird → Fehler anzeigen
  if (!form) {
    console.error("Formular mit ID 'contactForm' nicht gefunden!");
    return;
  }

  // Event auslösen, wenn auf "Nachricht senden" geklickt wird
  form.addEventListener("submit", async function (event) {
    // Verhindert das Neuladen der Seite
    event.preventDefault();

    // -----------------------------
    // FORM DATEN LESEN
    // -----------------------------
    const data = {
      name: document.getElementById("name").value,
      surname: document.getElementById("surname").value,
      email: document.getElementById("email").value,
      nummer: document.getElementById("nummer").value,
      message: document.getElementById("message").value,
    };

    console.log("Formulardaten:", data);

    // -----------------------------
    // AN BACKEND SENDEN
    // -----------------------------
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // -----------------------------
      // ANTWORT LESEN
      // -----------------------------
      const result = await response.json();

      console.log("Server Antwort:", result);

      // -----------------------------
      // USER INFO
      // -----------------------------
      if (result.ok) {
        alert("Nachricht gespeichert ✅");
        form.reset();
      } else {
        alert("Speichern fehlgeschlagen ❌");
      }
    } catch (error) {
      console.error("Fetch Fehler:", error);
      alert("Backend nicht erreichbar ❌");
    }
  });
});
