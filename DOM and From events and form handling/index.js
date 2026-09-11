// // =====>Form Events And Form Handling<=====

// const form = document.querySelector("#form");
// const btn = document.querySelector("#btn");
// const username = document.querySelector("#username");
// const bio = document.querySelector("#bio");
// const count = document.querySelector("#character-count");
// const checkbox = document.querySelector("#checkbox");
// // const passwordHint = document.querySelector("#password-hint");

// const password = document.querySelector("#password");

// const errorMsg = document.querySelector("#error-message");
// const country = document.querySelector("#country");
// const LIMIT = 150;

// count.textContent = `${LIMIT} Character remaning`;

// function showError(input, errorMsg) {
//   input.parentElement.querySelector(".error-message").textContent = errorMsg
// }


// function clearError(error) {
//   input.parentElemnt.querySelector(".error-message").textContent = ""
// }

// function isValidUsername(username) {
//   if (username.value.trim().length === 0) {
//     showError(username , "Please enter your name")
//     return false;
//   }
//   if (username.value.trim().length < 3) {
//     showError(username , "user must be 3 character")
//     return false;
//   }
//   clearError(username)
//   return true;
// }

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const isUserValid = isValidUsername(username);

//   //   const email = document.querySelector("#email").value;
//   //   console.log({ username: username.value, password: password.value, email });

//   if (isUserValid) {
//     console.log("from is valid");
//   } else {
//     console.log("Form invalid");
//   }
// });

// // bio.addEventListener("input",(e) =>{
// //     const remaning = LIMIT -bio.value.length
// //    count.textContent =` ${remaning} character remaning`
// // })

// //change event

// // username.addEventListener("change",(e) =>{
// //   console.log("change  event ",username.value);
// // })

// //input event
// // username.addEventListener("input",(e) =>{
// //   console.log("input  event ",username.value);
// // })

// // country.addEventListener("input" , (e) =>{
// //     console.log(country.value);
// // })

// // change event
// // checkbox.addEventListener("change",(e) =>{
// //   console.log(checkbox.checked)
// // })

// //Focuse event
// // username.addEventListener("focus",(e) =>{
// //   console.log("focus");
// // })

// // //blur event
// // username.addEventListener("blur",(e) =>{
// //   console.log('blur');
// // })

// // password.addEventListener("focus",(e) =>{
// //     passwordHint.classList.remove("hidden")

// // })

// // //blur event
// // password.addEventListener("blur",(e) =>{
// //      passwordHint.classList.add("hidden")

// // })



// =====> Form Events And Form Handling <=====
// =====>Part 3
const form = document.querySelector("#form");
const btn = document.querySelector("#btn");
const username = document.querySelector("#username");
const bio = document.querySelector("#Bio");
const charCoutn = document.querySelector("#charCoutn");
const checkbox = document.querySelector("#checkbox");
const country = document.querySelector("#country");
const passwordHint = document.querySelector("#password-hint");

const password = document.querySelector("#password");
const email = document.querySelector("#email");

const LIMIT = 150;

charCoutn.textContent = `${LIMIT} Remaining Character`;


function showErroe(input, errorMessage) {
  input.parentElement.querySelector(".error-message").textContent =errorMessage;
}

function clearError(input) {
   input.parentElement.querySelector(".error-message").textContent = ""

}

function ValidUsername(username) {
  if (username.value.trim().length === 0) {
    showErroe(username, "Please enter your name");
    return false;
  }

  if (username.value.trim().length < 3) {
    showErroe(username, "User name must be at least 3 character");
    return false;
  }
  clearError(username)
  return true;
}

function ValidPassword(password) {
  if (password.value.trim().length === 0) {
    showErroe(password, "Please enter your password");
    return false;
  }

  if (password.value.trim().length < 8) {
    showErroe(password, "password must be at least 8 character");
    return false;
  }
  clearError(password)
  return true;
}



function ValidBio(bio) {
  if (bio.value.trim().length === 0) {
    showErroe(bio, "Please fill bio");
    return false;
  }

  if (bio.value.trim().length <10   ) {
    showErroe(bio, "bio must be at least 10 character");
    return false;
  }
  clearError(bio)
  return true;
}


function ValidEmail(email) {
  if (email.value.trim().length === 0) {
    showErroe(email, "Please enter email;");
    return false;
  }

  if (email.value.trim().length <6   ) {
    showErroe(email, "email must be necessary symbol ---->@  ");
    return false;
  }
  clearError(email)
  return true;
}




form.addEventListener("submit", (e) => {
  e.preventDefault();

  const isUserNameValid = ValidUsername(username);
  const isPasswordValid = ValidPassword(password);
const isBioValid = ValidBio(bio);
const isEmailValid = ValidEmail(email)


  if (isUserNameValid && isPasswordValid && isBioValid && isEmailValid)  {
    document.querySelector("h1").classList.remove("hidden")
  } 
  else{
      document.querySelector("h1").classList.add("hidden")
  }
});

// bio.addEventListener("input", (e) => {
//  const remaning = LIMIT-bio.value.length
//  charCoutn.textContent = `${remaning} Remaining Character`
// });

// username.addEventListener("change", (e) => {
// console.log("change event",username.value);
// });

// username.addEventListener("input", (e) => {
// console.log(" input event",username.value);
// });

// checkbox.addEventListener("change", (e) => {
// console.log( checkbox.checked);
// });

// country.addEventListener('input',(e)=>{
//   console.log(country.value);
// })

// username.addEventListener("focus", (e) => {
// console.log(" Focus",username.value);
// });

// username.addEventListener("blur", (e) => {
// console.log(" Blur",username.value);
// });

// password.addEventListener("focus", (e) => {
// passwordHint.classList.remove("hidden")
// });

// password.addEventListener("blur", (e) => {
// passwordHint.classList.add("hidden")
// });

