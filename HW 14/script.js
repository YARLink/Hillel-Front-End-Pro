"use strict"

const body = document.querySelector("body");

const form = document.createElement("form");
body.appendChild(form);

const inputText = document.createElement("input");
inputText.setAttribute("type", "text");
inputText.setAttribute("placeholder", "Enter text");
form.appendChild(inputText);

const appendButton = document.createElement("button");
appendButton.textContent = ("Add");
appendButton.setAttribute("type", "submit");
form.appendChild(appendButton);

const ul = document.createElement("ul");
body.appendChild(ul);  

let USER_DATA_KEY = "userData";
let data = [];

function createListItem (text) {         
    
    const id = data.length + 1;
    let li = document.createElement("li");
    li.innerHTML = `${text} <i data-id = ${li.id}></i>`; 
    li.id = id;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = ("Delete");

    li.appendChild(deleteButton);
    ul.appendChild(li);

    data.push({ id, text });

    deleteButton.addEventListener("click", event => {
        const cleanStorage = data.filter(item => item.id !== +li.id);
        data = cleanStorage;
        save(USER_DATA_KEY, data); 
        event.target.parentNode.remove();
    });

    return li;
};

form.addEventListener("submit", event => {
    event.preventDefault();

    createListItem(inputText.value);
    save(USER_DATA_KEY, data);
    inputText.value = "";
    inputText.focus();
});

function save (key, data) {
    const json = JSON.stringify(data);
    localStorage.setItem(key, json);
};

function load (key) {
    const json = localStorage.getItem(key);

    try {
        const parsedList = JSON.parse(json);
        return parsedList.forEach(item => createListItem(item.text));
    } catch (error) {
        console.error (error);
        return null;
    };
};

load(USER_DATA_KEY);

