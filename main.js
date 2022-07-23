const form = document.querySelector('#form');
const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm_password');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const firstNameValue = firstName.value;
  const lastNameValue = lastName.value;
  const emailValue = email.value;
  const phoneValue = phone.vlaue;
  const passwordValue = password.value;
  const confirmPasswordValue = confirmPassword.value;
  const nameRegex = /^[A-Za-z\s]+$/;
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //first Name
  if (firstNameValue === '') {
    setErrorMessage(firstName, 'Name field cant be blank');
  } else if (!nameRegex.test(firstNameValue)) {
    setErrorMessage(firstName, 'Name field cant contain number');
  } else {
    setSuccesMessage(firstName);
  }
  //Last Name
  if (lastNameValue === '') {
    setErrorMessage(lastName, 'Name field cant be blank');
  } else if (!nameRegex.test(lastNameValue)) {
    setErrorMessage(lastName, 'Name field cant contain number');
  } else {
    setSuccesMessage(lastName);
  }
  //Email
  if (emailValue === ' ') {
    setErrorMessage(email, 'Email cant be blank');
  } else if (!emailRegex.test(emailValue)) {
    setErrorMessage(email, 'Not a valid email');
  } else {
    setSuccesMessage(email);
  }
}

function setErrorMessage(input, message) {
  const formControl = input.parentElement;
  const p = formControl.querySelector('p');
  //Add error message
  p.innerText = message;
  //Add erro class
  formControl.classList.add('error');
}
function setSuccesMessage(input) {
  const formControl = input.parentElement;
  formControl.classList.add('success');
}
