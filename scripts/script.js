const emailInput = document.querySelector(".emailInput");
const passwordInput = document.querySelector(".passwordInput");

const user = {
  email: "",
  password: "",
};

let isDarkTheme = true;

function showPassword() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}

function saveUserData() {
  user.email = emailInput.value;
  user.password = passwordInput.value;

  const userData = {
    email: user.email,
    password: user.password,
  };

  console.log(userData);
}

function toggleTheme() {
  const body = document.querySelector("body");
  const container = document.querySelector(".container");

  if (!isDarkTheme) {
    body.style.backgroundColor = "#191816";
    container.style.backgroundColor = "#24221f";
  } else {
    body.style.backgroundColor = "#94c75d";
    container.style.backgroundColor = "#f1f1f1";
  }

  isDarkTheme = !isDarkTheme;
}
