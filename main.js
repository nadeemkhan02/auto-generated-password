const hiddenConfrim = document.getElementById("hiddenconfirmpasswordicon");
const hiddenNew = document.getElementById("hiddennewpasswordicon");

const showNew = document.getElementById("shownewpasswordicon");
const showConfirm = document.getElementById("showconfirmpasswordicon");
const newPassword = document.getElementById("newpassword");
const confirmPassword = document.getElementById("confirmpassword");
const specialChar = "@#$%^&*";
const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number = "1234567890";

function handleGeneratePassword(event) {
  var generetedPassword = "";
  for (let i = 0; i < 12; i++) {
    if (generetedPassword.length <= 4) {
      generetedPassword = `${generetedPassword}${alphabet.charAt(
        Math.floor(Math.random() * alphabet.length)
      )}`;
    } else if (generetedPassword.length >= 5 && generetedPassword.length <= 8) {
      generetedPassword = `${generetedPassword}${specialChar.charAt(
        Math.floor(Math.random() * specialChar.length)
      )}`;
    } else {
      generetedPassword = `${generetedPassword}${number.charAt(
        Math.floor(Math.random() * number.length)
      )}`;
    }
  }
  const shuffledPassword = generetedPassword.split("").sort().join("");

  newPassword.value = shuffledPassword;
  confirmPassword.value = shuffledPassword;
}
function handleTogglePassword() {
  if (newPassword.type === "password") {
    showNew.style.display = "block";
    hiddenNew.style.display = "none";
    newPassword.type = "text";
  } else {
    showNew.style.display = "none";
    hiddenNew.style.display = "block";
    newPassword.type = "password";
  }
}
function handleToggleConfirmPassword() {
  if (confirmPassword.type === "password") {
    showConfirm.style.display = "block";
    hiddenConfrim.style.display = "none";
    confirmPassword.type = "text";
  } else {
    confirmPassword.type = "password";
    showConfirm.style.display = "none";
    hiddenConfrim.style.display = "block";
  }
}
