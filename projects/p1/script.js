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
function checkEmail(input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, `Please provide a valid email`);
    }
}

// function to check if required field have data

function checkRequired(inputArray) {
  inputArray.forEach(function (input) {
    if (input.value === '') {
      showError(input, `${getFieldId(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Function To check length 
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldId(input)} needs to be at least ${min} charecters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldId(input)} needs to be less then ${max} charecters`);
    } else {
        showSuccess(input);
    }
}

// Function To check if password and confirm-password is to be matched

function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, "Password don't match");
    }
}

//Funtion To get The id of the input field with proper case 
function getFieldId(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkRequired([username, email, password, confirmPassword]);
  checkLength(username,3, 10);
  checkLength(password,6, 30);
  checkEmail(email);
  checkPasswordsMatch(password, confirmPassword);
});
