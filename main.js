const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// when the form is submitted
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // check if all the inputs are valid to submit
  checkInputs();
});

function checkInputs() {
  // get values from the inputs
  // the trim gets rid of all the white space from string so the user cant press space in the input fields, only text
  const unsernameValue = username.value.trim();
  const emaileValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  // if the username field is empty then show error msg else success
  if (unsernameValue === "") {
    // error class
    setErrorFor(username, "Username can to be blank");
  } else {
    // success class
    setSuccessFor(username);
  }
}

// function for the error
function setErrorFor(input, message) {
  const formControl = input.parentElement; // .form-control element in the html
  const small = formControl.querySelector("small");

  // add error msg inside small
  small.innerText = message;

  // add error class
  formControl.className = "form-control error";
}

// function for the success
function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
