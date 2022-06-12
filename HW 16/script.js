"use strict";

const body = document.querySelector("body");

const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");

const content = document.createElement("div");
content.classList.add("content");

const loadButton = document.createElement("button");
loadButton.classList.add("button");
loadButton.textContent = "Load";

body.appendChild(wrapper);
wrapper.append(content, loadButton);

const url = new URL("https://rickandmortyapi.com/api/character");

let currentPageUrl = 1;
let lastPage;

function getLastPage(data) {
  data.then((page) => {
    lastPage = page.info.pages;
  });
};

function setCurrentPage(pageUrl) {
  url.searchParams.set("page", `${pageUrl}`);
  if (pageUrl >= lastPage) {
    loadButton.disabled = true;
  };
};

function renderList(items) {
  const ol = document.createElement("ol");

  items.then((data) => {
    data.results.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item.name;

      ol.appendChild(li);
    });
  });

  content.innerHTML = "";
  content.appendChild(ol);
};

function setButtonLoadingState() {
  loadButton.textContent = "Loading...";
  loadButton.disabled = true;
  setCurrentPage(currentPageUrl);
};

function setButtonInitialState() {
  loadButton.textContent = "Load";
  loadButton.disabled = false;
  setCurrentPage(currentPageUrl);
};

function setLoadingParams() {
  load({
    url: url,
    onLoadStart: setButtonLoadingState,
    onLoadSuccess: (data) => {
      renderList(data);
      getLastPage(data);
      setButtonInitialState();
    },
    onLoadError: () => {
      setButtonInitialState();
    },
  });
};

loadButton.addEventListener("click", () => {
  currentPageUrl++;

  setCurrentPage(currentPageUrl);
  setLoadingParams();
});

function load(props) {
  return fetch(props.url).then((response) => {
    props.onLoadStart();
    setTimeout(() => {
      if (response.ok) {
        props.onLoadSuccess(response.json());
        return response.json;
      }
      const error = new Error(`Error loading page ${currentPageUrl}`);
      return Promise.reject(error);
    }, 1000);
  });
};
