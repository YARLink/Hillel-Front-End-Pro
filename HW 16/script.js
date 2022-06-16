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

let currentPageUrl = 0;

function setCurrentPage(pageUrl) {
  url.searchParams.set("page", `${pageUrl}`);
};

function renderList(res) {
  const ol = document.createElement("ol");
  
  res.results.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.name;

    ol.appendChild(li);
  });

  content.innerHTML = "";
  content.appendChild(ol);
};

function setButtonLoadingState() {
  loadButton.textContent = "Loading...";
  loadButton.disabled = true;
};

function setButtonInitialState() {
  loadButton.textContent = "Load";
  loadButton.disabled = false;
};

loadButton.addEventListener("click", () => {
  currentPageUrl++;
  setCurrentPage(currentPageUrl);
  setButtonLoadingState();

  load()
  .then(data => {
    renderList(data);
    if(data.info.next === null) {
      loadButton.disabled = true;
    }
  })
  .catch(error => new Error(error))
});

function load() {
  return fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response);
    })
    .catch((error) => reject(error))
    .finally(() => {
      setButtonInitialState();
    });
};