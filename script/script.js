// console.log("Javascript läuft!");

// const headline = document.querySelector("h1");
// console.log(headline);
//  document steht für das ganze HTML-Dokument
// querySelector ist eine Methode, die ein Element anhand eines Selektors auswählt
// In diesem Fall wird das erste <h1>-Element ausgewählt
//  const headline = ... speichert das ausgewählte Element in der Variablen headline. wir geben diesem Element den Namen headline, damit wir später im Code darauf zugreifen können.
// ##################################################

// headline.textContent = "Willkommen JavaScript!";
// textContent ist eine Eigenschaft, die den Textinhalt eines Elements festlegt oder abruft
// In diesem Fall wird der Text des <h1>-Elements auf "Willkommen JavaScript!" gesetzt

// ##################################################
// const testButton = document.querySelector("#test-btn");
// testButton.addEventListener("click", function() {
//     alert("Button wurde geklickt!");
// });
// Wir wählen den Button mit der ID "test-btn" aus und speichern ihn in der Variablen testButton
// addEventListener ist eine Methode, die es uns ermöglicht, auf Ereignisse (Events) zu reagieren
// In diesem Fall reagieren wir auf das "click"-Ereignis, also wenn der Button geklickt wird
// Die Funktion, die als zweites Argument übergeben wird, wird ausgeführt, wenn der Button geklickt wird
// In diesem Fall wird ein Alert-Fenster mit der Nachricht "Button wurde geklickt!" angezeigt
// ##################################################

const headline = document.querySelector("h1");

// addEventlistner bedeutet: bedeutet:Wenn auf dieses Element geklickt wird …“

headline.addEventListener("click", function () {
    alert("Du hast auf die Überschrift geklickt");
});

const ueberMichBetreff = document.querySelector(".home-about h2");

ueberMichBetreff.addEventListener("click", function () {
    alert("Du hast auf den Über mich Betreff geklickt");
});