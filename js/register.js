const form = document.querySelector(".form-register");
const firstName = document.querySelector(".Firstname");
const lastName = document.querySelector(".Lastname");
const userName = document.querySelector(".Username");
const password1 = document.querySelector(".Password");
const confirmPassword = document.querySelector(".confirm");
const registerBtn = document.querySelector(".register-btn");
const output = document.getElementById("output");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
  form.reset();
});
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.remove("error");
  inputControl.classList.add("success");
};

const validateInputs = () => {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const userNameValue = userName.value.trim();
  const passwordValue = password1.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  if (firstNameValue === "") {
    setError(firstName, "Ismingizni kiriting");
  } else {
    setSuccess(firstName);
  }

  if (lastNameValue === "") {
    setError(lastName, "Familiyangizni kiriting");
  } else {
    setSuccess(lastName);
  }

  if (userNameValue === "") {
    setError(userName, "Foydalanuvchi nomeringizni kiriting");
  } else {
    setSuccess(userName);
  }

  if (passwordValue === "") {
    setError(password1, "Parolni kiriting");
  } else if (passwordValue.length < 8) {
    setError(password1, "Parol kamida 8 ta belgidan iborat bo'lishi kerak.");
  } else {
    setSuccess(password1);
  }

  if (confirmPasswordValue === "") {
    setError(confirmPassword, "Parolni tasdiqlang");
  } else if (passwordValue !== confirmPasswordValue) {
    setError(confirmPassword, "Parollar mos kelmadi");
  } else {
    setSuccess(confirmPassword);
  }
};

registerBtn.addEventListener("click", function () {
  const fName = firstName.value;
  const lNmae = lastName.value;
  const uName = userName.value;
  const password = password1.value;
  const confirm = confirmPassword.value;

  output.textContent = fName;
  output.textContent = lNmae;
  output.textContent = uName;
  output.textContent = password;
  output.textContent = confirm;
});
