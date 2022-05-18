"use strict"

const body = document.querySelector("body");
const listWrapper = document.createElement("div");
listWrapper.className = "list_wrapper";
body.appendChild(listWrapper);

function generateList (children, parent) {

    let ul = document.createElement("ul");
    parent.appendChild(ul);
    
    children.forEach((item) => {
        let li = document.createElement("li");
        ul.appendChild(li);
        if (Array.isArray(item)) {
            generateList(item, li);
        }
        else {
            li.innerText = item;
        }
    });
}

let someArray = [1, 2, [1.1, 1.2, 1.3], 3];

generateList(someArray, listWrapper);

