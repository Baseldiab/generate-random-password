const passwordVol = document.querySelector(".password__vol");
const inputVol = document.querySelector(".password__input-vol");
const randomPassword = document.querySelector(".password-random");
const generateButton = document.querySelector(".generate-btn");

// ========================
inputVol.addEventListener("change", function () {
  passwordVol.textContent = inputVol.value;
  console.log(inputVol.value);
});
// ========================
generateButton.addEventListener("click", generatePassword);
// ========================
function generatePassword() {
  let charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
  // let charset = /\w/g;
  let password = "";
  for (let i = 0; i < inputVol.value; i++) {
    let random = Math.floor(Math.random() * charset.length);
    password += charset[random];
  }
  randomPassword.innerHTML = password;
  return password;
}

// ========================
// ========================
const footerYear = document.querySelector(".footer-year");
footerYear.textContent = new Date().getFullYear();
// ========================
