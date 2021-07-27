
//First Name Validation -- Cannot be empty
//Last Name Validation -- cannot be empty
//Email Validation -- must follow the format of an email

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
    } else if (/(.+)@(.+){2,}\.(.+){2,}/.test(formInputEmail)) {
        return true;
    } else {
        alert("Please provide valid email.");
        return false;
    }
}

