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

const form = document.querySelector("#form");
const btn = document.querySelector("#btn");

const username = document.querySelector("#username");
const bio = document.querySelector("#bio");
const count = document.querySelector("#character-count");

const checkbox = document.querySelector("#checkbox");

const password = document.querySelector("#password");
const errorMsg = document.querySelector("#error-message");

const country = document.querySelector("#country");

const LIMIT = 150;


// Character count
count.textContent = `${LIMIT} Character remaining`;


// Show Error
function showError(input, errorMsg) {

    input.parentElement.querySelector(".error-message").textContent = errorMsg;

}


// Clear Error
function clearError(input) {

    input.parentElement.querySelector(".error-message").textContent = "";

}


// Username validation
function isValidUsername(username) {
//check 1
    if (username.value.trim().length === 0) {

        showError(username, "Please enter your name");

        return false;
    }

//check 2
    if (username.value.trim().length < 3) {

        showError(username, "User must be 3 characters");

        return false;
    }


    clearError(username);

    return true;
}

function validPassword(password) {
//check 1
    if (password.value.trim().length === 0) {

        showError(password, "Please enter your password");

        return false;
    }

//check 2
    if (password.value.trim().length < 8) {

        showError(password, "password  must be 8  characters");

        return false;
    }


    clearError(password);

    return true;
}


// Form submit
form.addEventListener("submit", (e) => {

    e.preventDefault();

    const isUserValid = isValidUsername(username);//passsing username element
    const ispasswordValid = validPassword(password);//passing password element


    if (isUserValid && ispasswordValid) {

       document.querySelector("h1").classList.remove("hidden")

    } else{
       document.querySelector("h1").classList.add("hidden")
    }

});

