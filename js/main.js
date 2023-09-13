const passwordVol = document.querySelector(".password__vol");
const inputVol = document.querySelector(".password__input-vol");
const randomPassword = document.querySelector(".password-random");
const generateButton = document.querySelector(".generate-btn");
const copyToClipboard = document.querySelector(".btn-copy");
const formCheckBox = document.querySelector(".form-checkbox");

const checkedBoxes = document.querySelectorAll('[type="checkbox"]');

// ========================
inputVol.addEventListener("change", function () {
  passwordVol.textContent = inputVol.value;
  console.log(inputVol.value);
});
// ========================
copyToClipboard.addEventListener("click", copyTextToClipboard);
// ========================
function copyTextToClipboard() {
  navigator.clipboard.writeText(randomPassword.textContent);
}
// ========================
generateButton.addEventListener("click", generatePassword);
// ========================
function generatePassword() {
  const uppercaseCheckBox = formCheckBox.uppercase.checked;
  const lowercaseCheckBox = formCheckBox.lowercase.checked;
  const numberCheckBox = formCheckBox.number.checked;
  const symbolCheckBox = formCheckBox.symbol.checked;
  let charset;
  charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
  passwordCases(
    charset,
    uppercaseCheckBox,
    lowercaseCheckBox,
    numberCheckBox.symbolCheckBox
  );
}
// ========================
function passwordCases(
  charset,
  uppercaseCheckBox,
  lowercaseCheckBox,
  numberCheckBox,
  symbolCheckBox
) {
  let charPool = "";
  if (uppercaseCheckBox) {
    charPool += charset.match(/[A-Z]+/g);
    getPassword(charPool);
  }
  if (lowercaseCheckBox) {
    charPool += charset.match(/[a-z]+/g);
    getPassword(charPool);
  }
  if (numberCheckBox) {
    charPool += String(charset.match(/\d+/g));
    getPassword(charPool);
  }
  if (symbolCheckBox) {
    charPool += String(charset.match(/\W/g));
    getPassword(charPool);
  }
}

// ========================
function getPassword(charset) {
  let password = "";
  for (let i = 0; i < inputVol.value; i++) {
    let random = Math.floor(Math.random() * charset.length);
    password += charset[random];
  }
  randomPassword.innerHTML = password;
  return password;
}
// ========================
const footerYear = document.querySelector(".footer-year");
footerYear.textContent = new Date().getFullYear();
// ========================
