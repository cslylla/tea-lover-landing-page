//Change theme
let body = document.querySelector("body");
let themeButton = document.querySelector(".theme-button");

function changeTheme() {
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    themeButton.innerHTML = "Dark mode";
  } else {
    body.classList.add("dark");
    themeButton.innerHTML = "Light mode";
  }
}

themeButton.addEventListener("click", changeTheme);
