"use strict"

const body = document.querySelector("body");

function Wrapper (name) {
    const wrapperName = document.createElement("div");
    const squareWrapperHeader = document.createElement("h2");
    squareWrapperHeader.innerText = (name);
    wrapperName.appendChild(squareWrapperHeader);
    wrapperName.classList.add("wrapper");
    body.appendChild(wrapperName);
    return wrapperName;   
}

function createSquares() {

    const element = document.createElement("div");
    element.classList.add("square");

    return element;

}

// 1.________________________________________________________________________________

let squareWrapperNumber = new Wrapper("MISSION 1");

function setSquareNumber() {

    const square = createSquares();

    let currentSquareNumber = 0;
    square.innerText = (currentSquareNumber);

    square.addEventListener("click", event => {

        currentSquareNumber++
        square.innerText = (currentSquareNumber);

    })
    return square;
}

for (let i = 0; i < 5; i++) {
    squareWrapperNumber.appendChild(setSquareNumber());
}

setSquareNumber();

// // 1a._____________________________________________________________________________

let squareWrapperNumberCounter = new Wrapper("MISSION 1a");

function setSquareNumberCounter() {

    const square = createSquares();

    let numberWrapper = document.createElement("span");
    let currentSquareNumberCounter = 0;
    numberWrapper.innerText = (currentSquareNumberCounter);
    square.appendChild(numberWrapper);

    const positiveCounter = document.createElement("button");
    const negativeCounter = document.createElement("button");

    negativeCounter.innerText = ("-"); 
    positiveCounter.innerText = ("+");  

    square.appendChild(negativeCounter);
    square.appendChild(positiveCounter);

    negativeCounter.addEventListener("click", event => {

        currentSquareNumberCounter--
        numberWrapper.innerText = (currentSquareNumberCounter);

    })

    positiveCounter.addEventListener("click", event => {

        currentSquareNumberCounter++
        numberWrapper.innerText = (currentSquareNumberCounter);

    })

    return square;
}

for (let i = 0; i < 5; i++) {
    squareWrapperNumberCounter.appendChild(setSquareNumberCounter());
}

setSquareNumberCounter();

// // 2._________________________________________________________________________________

let squareWrapperColor = new Wrapper("MISSION 2");

const colors = ["blue", "green", "yellow"];

function setSquaresColor() {

    const square = createSquares();

    let currentColorIndex = 0;
    square.style.backgroundColor = colors[currentColorIndex];

    square.addEventListener("click", event => {
        currentColorIndex++;

        if (currentColorIndex > colors.length - 1){
            currentColorIndex = 0;
        }

        square.style.backgroundColor = colors[currentColorIndex];
    })

    return square;
}

for (let i = 0; i < 5; i++) {
    squareWrapperColor.appendChild(setSquaresColor());
}

setSquaresColor();

// // 3._____________________________________________________________________________

let squareWrapperList = new Wrapper("MISSION 3");
squareWrapperList.classList.add("listWrapper");

function generateList (children, parent) {

    let ul = document.createElement("ul");
    ul.classList.add("list")
    parent.appendChild(ul);
    
    children.forEach((item) => {
        let li = document.createElement("li");
        li.classList.add("item");
        ul.appendChild(li);
        if (Array.isArray(item)) {
            generateList(item, li);
        }
        else {
            li.innerText = item;
        }

        document.querySelectorAll(".item").forEach(li => {

            li.addEventListener("click", event => {

                let currentItemColor = document.querySelector(".yellow");
                if (currentItemColor !== null) {
                    currentItemColor.classList.remove("yellow");
                }
                li.classList.add("yellow");
            })

        })

    })

}

let someArray = ["first item", "second item", "third item"];

generateList(someArray, squareWrapperList);