"use strict"

const body = document.querySelector("body");
const form = document.createElement("form");
body.appendChild(form);

const inputEmail = document.createElement("input");
inputEmail.setAttribute("type", "text");
inputEmail.setAttribute("placeholder", "Enter email");

const inputPassword = document.createElement("input");
inputPassword.setAttribute("type", "password");
inputPassword.setAttribute("placeholder", "Enter password");

const submitButton = document.createElement("button");
submitButton.setAttribute("type", "submit");
submitButton.textContent = "Submit"
submitButton.disabled = true;

form.append(inputEmail, inputPassword, submitButton);

function isValidEmail(email) {
    return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(email);
}

function isValidPassword(password) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
}

let validEmail = false;
let validPassword = false;

function onFocus(event) {
    event.target.classList.remove("error");
};

function setSubmitButtonDisabled() {
    submitButton.disabled = !validEmail || !validPassword;
};

inputEmail.addEventListener("blur", event => {
    const {value} = event.target;
    validEmail = isValidEmail(value);

    if (value !== "" && !validEmail) {
        event.target.classList.add("error")
    };

    setSubmitButtonDisabled();
});

inputEmail.addEventListener("input", event => {
    if(validPassword) {
        validEmail = isValidEmail(event.target.value);
    };
    setSubmitButtonDisabled();
});

inputEmail.addEventListener("focus", onFocus);

inputPassword.addEventListener("blur", event => {
    const {value} = event.target;
    validPassword = isValidPassword(value);

    if (value !== "" && !validPassword) {
        event.target.classList.add("error")
    };

    setSubmitButtonDisabled();
});

inputPassword.addEventListener("input", event => {
    if(validEmail) {
        validPassword = isValidPassword(event.target.value);
    };
    setSubmitButtonDisabled();
});

inputPassword.addEventListener("focus", onFocus);

form.addEventListener("submit", event => {
    event.preventDefault();

    const email = inputEmail.value;
    const password = inputPassword.value;
    console.log({email, password});

    inputEmail.value = "";
    inputPassword.value = "";
    validEmail = false;
    validPassword = false;
    setSubmitButtonDisabled();
});
