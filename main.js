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
  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  //first Name valdilation
  if (firstNameValue === '') {
    setErrorMessage(firstName, 'Name field cant be blank');
  } else if (!nameRegex.test(firstNameValue)) {
    setErrorMessage(firstName, 'Name field cant contain number');
  } else {
    setSuccesMessage(firstName);
  }
  //Last Name valdilation
  if (lastNameValue === '') {
    setErrorMessage(lastName, 'Name field cant be blank');
  } else if (!nameRegex.test(lastNameValue)) {
    setErrorMessage(lastName, 'Name field cant contain number');
  } else {
    setSuccesMessage(lastName);
  }
  //Email valdilation
  if (emailValue === ' ') {
    setErrorMessage(email, 'Email cant be blank');
  } else if (!emailRegex.test(emailValue)) {
    setErrorMessage(email, 'Enter a valid email');
  } else {
    setSuccesMessage(email);
  }

  //Phone valdilation
  if (phoneValue === '') {
    setErrorMessage(phone, 'Phone cant be blank');
  } else if (!phoneRegex.test(phoneValue)) {
    setErrorMessage(phone, 'Enter a valid phone number');
  } else {
    setSuccesMessage(phone);
  }

  //password valdilation
  if (passwordValue === '') {
    setErrorMessage(password, 'Password cant be blank');
  } else if (!passwordRegex.test(passwordValue)) {
    setErrorMessage(
      password,
      'Password must be minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character'
    );
  } else setSuccesMessage(password);
  //confirm password valdilation
  if (confirmPasswordValue === '') {
    setErrorMessage(confirmPassword, 'Password cant be blank');
  } else if (passwordValue === confirmPasswordValue) {
    setErrorMessage(confirmPassword, 'Password does not match');
  } else {
    setSuccesMessage(confirmPassword);
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
