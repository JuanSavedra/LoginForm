const body = document.querySelector("body");
const container = document.querySelector(".container");

let isDarkTheme = true;

function toggleTheme() {
  if (!isDarkTheme) {
    body.style.backgroundColor = "#191816";
    container.style.backgroundColor = "#24221f";
  } else {
    body.style.backgroundColor = "#94c75d";
    container.style.backgroundColor = "#f1f1f1";
  }

  isDarkTheme = !isDarkTheme;
}
