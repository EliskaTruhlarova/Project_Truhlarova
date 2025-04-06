// REGISTER.HTML
const passwordInput = document.querySelector(".password");
const password2Input = document.querySelector(".password2");

function checkPasswordsMatch() {
  const pass = passwordInput.value;
  const pass2 = password2Input.value;

  if (pass === "" && pass2 === "") {
    passwordInput.style.border = "2px solid #ccc";
    password2Input.style.border = "2px solid #ccc";
    notifPassword2.style.display = "none";
    return;
  }

  if (pass === pass2 && pass !== "") {
    passwordInput.style.border = "2px solid green";
    password2Input.style.border = "2px solid green";
    notifPassword2.style.display = "none";
  } else {
    passwordInput.style.border = "2px solid red";
    password2Input.style.border = "2px solid red";
    notifPassword2.style.display = "block";
  }
}

[passwordInput, password2Input].forEach((input) =>
  input.addEventListener("input", checkPasswordsMatch)
);
