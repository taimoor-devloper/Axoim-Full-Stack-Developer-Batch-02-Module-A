// DOM --> Document Object Modle
// NODES
// DOCUMENT
//     Doctype
//     html
//         head
//             title
//             meta
//         body

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

// All Functions
// 1) Function To Show Error

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  small = formControl.querySelector("small");
  small.innerText = message;
}

// 1.1) Funtion To Show success
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

//2) Function To Check Email is Valid
function isValidEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (username.value === "") {
    showError(username, "Username is required");
  } else {
    showSuccess(username);
  }

  if (email.value === "") {
    showError(email, "Email is required");
  } else if (!isValidEmail(email.value)) {
      showError(email, 'Email is Invalid')
  } else {
    showSuccess(email);
  }

  if (password.value === "") {
    showError(password, "Password is required");
  } else {
    showSuccess(password);
  }

  if (confirmPassword.value === "") {
    showError(confirmPassword, "Confirm password is required");
  } else {
    showSuccess(confirmPassword);
  }
});
