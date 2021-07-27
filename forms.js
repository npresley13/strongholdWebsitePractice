
//First Name Validation -- Cannot be empty
function formValidation() {
    let formInputFirstName = document.forms["quote-form"]["first-name"].value;
    let formInputLastName = document.forms["quote-form"]["last-name"].value;
    let formInputEmail = document.forms["quote-form"]["email"].value;
    if (formInputFirstName == "") {
        alert("Please provide first name.");
        return false;
    } else if (formInputLastName == "") {
        alert("Please provide last name.");
        return false;
    } else if (formInputEmail !== "") {
        alert("Please provide valid email.");
        return false;
    }
}

// //Last Name Validation -- Cannot be empty
// function formValidation() {
//     let formInput = document.forms["quote-form"]["last-name"].value;
//     if (formInput == "") {
//         alert("Please provide last name.");
//         return false;
//     } 
// }

// //Email Validation
// function formValidation() {
//     let formInput = document.forms["quote-form"]["email"].value;
//     if (formInput !== "/\S+@\S+\.\S+/") {
//         alert("Please provide valid email.");
//         return false;
//     } 
// }