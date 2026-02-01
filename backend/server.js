// -----------------------------
// MODULE LADEN
// -----------------------------

// Express = Server Framework
const express = require("express");

// CORS = erlaubt Zugriff vom Frontend
const cors = require("cors");

// fs = File System → Dateien schreiben
const fs = require("fs");

// -----------------------------
// SERVER ERSTELLEN
// -----------------------------

// Hier wird die Server-App erzeugt
// OHNE diese Zeile gibt es: "app is not defined"
const app = express();

// -----------------------------
// MIDDLEWARE
// -----------------------------

// Frontend darf Backend aufrufen
app.use(cors());

// JSON Daten aus fetch lesen → req.body
app.use(express.json());

// -----------------------------
// TEST ROUTE
// -----------------------------

// Test im Browser: http://localhost:8000
app.get("/", (req, res) => {
  res.send("Server läuft ✅");
});

// -----------------------------
// POST ROUTE FÜR KONTAKTFORMULAR
// -----------------------------

// Diese Route reagiert auf POST Anfragen an:
// http://localhost:8000/api/contact

app.post("/api/contact", (req, res) => {
  const data = req.body;

  console.log("Nachricht erhalten:", data);

  // Pflichtfelder prüfen
  if (!data.name || !data.email || !data.message) {
    return res.status(400).json({
      ok: false,
      message: "Pflichtfelder fehlen",
    });
  }

  // Textblock bauen
  const text =
    `Name: ${data.name} ${data.surname}\n` +
    `Email: ${data.email}\n` +
    `Nummer: ${data.nummer}\n` +
    `Nachricht: ${data.message}\n` +
    `----------------------\n`;

  // Absoluter Speicherpfad
  const filePath = __dirname + "/messages.txt";
  console.log("Speicherpfad:", filePath);

  // Datei anhängen
  fs.appendFile(filePath, text, (err) => {
    if (err) {
      console.error("Fehler beim Speichern:", err);
      return res.status(500).json({ ok: false });
    }

    console.log("Datei erfolgreich geschrieben ✅");

    res.json({
      ok: true,
      message: "Gespeichert",
    });
  });
});

// -----------------------------
// SERVER STARTEN (IMMER GANZ UNTEN)
// -----------------------------

app.listen(8000, () => {
  console.log("Server läuft auf http://localhost:8000");
});
