const form = document.getElementById('myFormId');

function regValidate() {
    var acumErrores = 0;

    form.classList.remove('is-invalid');

    var name = document.getElementById('nameId');
    var surname = document.getElementById('surnameId');
    var email = document.getElementById('emailId');
    var password = document.getElementById('passwordId');
    var confirmation = document.getElementById('confirmationId');
    var state = document.getElementById('stateId');
    var gridCheck = document.getElementById('invalidCheckId');

    if (name.value === "") {
        name.classList.add("is-invalid");
        acumErrores++;
    } else if (!nameValidation(name.value)) {
        name.classList.add("is-invalid");
        acumErrores++;
    }
    if (surname.value === "") {
        surname.classList.add("is-invalid");
        acumErrores++;
    } else if (!surnameValidation(surname.value)) {
        surname.classList.add("is-invalid");
        acumErrores++;
    }
    if (email.value === "") {
        email.classList.add("is-invalid");
        acumErrores++;
    } else if (!emailValidation(email.value)) {
        email.classList.add("is-invalid");
        acumErrores++;
    }
    if (password.value === "") {
        password.classList.add("is-invalid");
        acumErrores++;
    } else if (!passwordValidation(password.value)) {
        password.classList.add("is-invalid");
        acumErrores++;
    }
    if (confirmation.value === "") {
        confirmation.classList.add("is-invalid");
        acumErrores++;
    } else if (confirmation.value !== password.value) {
        confirmation.classList.add("is-invalid");
        acumErrores++;
    }
    if (state.value === "") {
        state.classList.add("is-invalid");
        acumErrores++;
    }

    if (!gridCheck.checked) {
        gridCheck.classList.add("is-invalid");
        acumErrores++;
    }


    if (acumErrores > 0) {
        return false;
    } else {
        return true;
    }

}
form.addEventListener('blur', (event) => {
    console.log(event);
    if (event.target.value != '') event.target.classList.remove('is-invalid');
    //registerValidate();
}, true);


function nameValidation(name) {
    var regexName = /[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð,.'-]{2,48}/;
    return regexName.test(name) ? true : false;
}
function surnameValidation(surname) {
    var regexSurname = /[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð,.'-]{2,48}/;
    return regexSurname.test(surname) ? true : false;
}
function emailValidation(email) {
    var regexEmail = /([a-zA-Z0-9._-]+@[a-zA-ZñÑ\s-9._]+\.[a-zA-Z0-9._-]+)/gi;
    return regexEmail.test(email) ? true : false;
}
function passwordValidation(password) {
    var regexPassword = /(?=.*[A-Z])+(?=.*[0-9])+(?=.{8,})/;
    return regexPassword.test(password) ? true : false;
}

