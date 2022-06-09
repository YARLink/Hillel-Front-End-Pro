"use strict"

const body = document.querySelector("body");

const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");

const content = document.createElement("div");
content.classList.add("content");

const buttonWrapper = document.createElement("div");
buttonWrapper.classList.add("btnWrapper");

const loadButton = document.createElement("button");
loadButton.classList.add("button");
loadButton.textContent = "Load";

const prevButton = document.createElement("button");
prevButton.classList.add("button");
prevButton.textContent = "Prev";

const nextButton = document.createElement("button");
nextButton.classList.add("button");
nextButton.textContent = "Next";

const numberWrapper = document.createElement("span");
let currentPageNumber = 1;
let currentPageUrl = 1;
numberWrapper.textContent = currentPageNumber;

body.append(wrapper, buttonWrapper);
wrapper.appendChild(content);
buttonWrapper.append(loadButton, prevButton, numberWrapper, nextButton);

const buttons = document.querySelectorAll(".button");

const url = new URL("https://rickandmortyapi.com/api/character");

let lastPage;  

function getLastPage(data) {
    for (const key in data) {
        lastPage = data.pages;
    };
};

function setCurrentPage(pageNumber, pageUrl) {
    numberWrapper.textContent = pageNumber;
    url.searchParams.set("page", `${pageUrl}`);
    
    if (pageUrl >= lastPage) {
        nextButton.disabled = true;
    };

    if (pageUrl <= 1) {
        prevButton.disabled = true;
    };
};

function renderList(items) {
    const ol = document.createElement("ol");

    for (const item of items) {
        const li = document.createElement("li");
        li.textContent = item.name;

        ol.appendChild(li);
    }

    content.innerHTML = "";
    content.appendChild(ol);
};

function setButtonLoadingState() {
    loadButton.textContent = "Loading...";
    buttons.forEach(btn => {
        btn.disabled = true;
    });
    setCurrentPage(currentPageNumber, currentPageUrl);
};

function setButtonInitialState() {
    loadButton.textContent = "Load";
    buttons.forEach(btn => {
        btn.disabled = false;
    });
    setCurrentPage(currentPageNumber, currentPageUrl);
};

function setLoadingParams() {
    load({
        url: url,
        onLoadStart: setButtonLoadingState,
        onLoadSuccess: data => {
            renderList(data.results);
            getLastPage(data.info);
            setButtonInitialState();
        },
        onLoadError: () => {
            alert("Error loading data!");
            setButtonInitialState();
        }
    });
};

loadButton.addEventListener("click", () => {
    setLoadingParams();
});

prevButton.addEventListener("click", () => {
    currentPageNumber--;
    currentPageUrl--;
    
    setCurrentPage(currentPageNumber, currentPageUrl);
    setLoadingParams();
});

nextButton.addEventListener("click", () => {
    currentPageNumber++;
    currentPageUrl++;
    
    setCurrentPage(currentPageNumber, currentPageUrl);
    setLoadingParams();
});

function load(props) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";

    xhr.onload = function() {
        if (xhr.status === 200) {
            props.onLoadSuccess(xhr.response);
        } else {
            props.onLoadError();
        }
    };

    xhr.onerror = props.onLoadError;

    xhr.open("GET", props.url);

    props.onLoadStart();
    setTimeout(() => {
        xhr.send();
    }, 1000);
};