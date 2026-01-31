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
  form.addEventListener("submit", function (event) {
    // Verhindert das Neuladen der Seite
    event.preventDefault();

    // Daten aus den Input-Feldern auslesen
    const data = {
      name: document.getElementById("name").value,
      surname: document.getElementById("surname").value,
      email: document.getElementById("email").value,
      nummer: document.getElementById("nummer").value,
      message: document.getElementById("message").value,
    };

    // Test: Daten in der Konsole anzeigen
    console.log("Formulardaten:", data);
  });
});
