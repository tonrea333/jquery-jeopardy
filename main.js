
const tableMain = document.createElement("table")
tableMain.setAttribute("class", "table");
const tableHead = document.createElement("thead");
tableHead.setAttribute("class", "Thead");
const tableRow = document.createElement("tr");

const tableHcol = document.createElement("th");
tableH.setAttribute("scope", "col");

const tableBody = document.createElement("tbody");

const tableHrow = document.createElement("th");
tableHrow.setAttribute("scope", "row");


const tableRow = document.createElement("tr");
tableRow.setAttribute("class", "row");
const tableHeader = document.createElement("th");
tableHeader.setAttribute("class", "header");
const tableData = document.createElement("td");
tableData.setAttribute("class", "adata");
const tableData2 = document.createElement("td");
tableData2.setAttribute("class", "adata");
const tabledataDiv = document.querySelector("#data")

tabledataDiv.appendChild(tableRow);
tableRow.appendChild(tableHeader);
tableHeader.append();
tableRow.appendChild(tableData);
tableData.append();
tabledataDiv.appendChild(tableRow);
tableRow.appendChild(tableData);
tableData.append();
tableRow.appendChild(tableData2);
tableData2.append();