"use strict"

const body = document.querySelector("body");
const table = document.createElement("table");
const tbody = document.createElement("tbody");
const thead = document.createElement("thead");
const trhead = document.createElement("tr");
const tdhead = document.createElement("td");
const tdheadText = document.createTextNode("10 x 10 table")
table.className = "table table-striped";
tdhead.setAttribute("colspan" , "10");
tdhead.appendChild(tdheadText);
trhead.appendChild(tdhead);
thead.appendChild(trhead); 
table.appendChild(thead);
table.appendChild(tbody);  
body.appendChild(table);

for (let x = 0; x < 10; x++) {
    let tr = document.createElement("tr");
    tbody.appendChild(tr);
    for (let y = 1; y <= 10; y++) {
        let td = document.createElement("td");
        let tdText = document.createTextNode(x * 10 + y);
        td.appendChild(tdText);
        tr.appendChild(td);
    }   
}