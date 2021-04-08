let userName = document.getElementById("name");
let passWord = document.getElementById("password");
let cfPassword = document.getElementById("cfpassword");
const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let email = document.getElementById("email");
const checkPass = () => {
  if (passWord.value !== cfPassword.value) {
    cfPassword.nextElementSibling.classList.add("err");
    cfPassword.classList.remove("active");
  } else {
    cfPassword.nextElementSibling.classList.remove("err");
    cfPassword.classList.add("active");
  }
};
const handleInput = (e) => {
  let length = e.target.value.length;
  let currentTarget = e.currentTarget;
  let err = currentTarget.nextElementSibling;
  if (length < 8) {
    err.classList.add("err");
    currentTarget.classList.remove("active");
  } else {
    err.classList.remove("err");
    currentTarget.classList.add("active");
  }
};
const checkEmail = () => {
  if (!re.test(email.value)) {
    email.nextElementSibling.classList.add("err");
    email.classList.remove("active");
  } else {
    email.nextElementSibling.classList.remove("err");
    email.classList.add("active");
  }
};

userName.addEventListener("input", handleInput);
passWord.addEventListener("input", handleInput);
cfPassword.addEventListener("input", checkPass);
email.addEventListener("input", checkEmail);
