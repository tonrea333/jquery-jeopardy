
const pushButton = document.querySelector("#button");
const bodyMaster = document.querySelector("#masterbody");


pushButton.addEventListener("click", jepBoxes);

//function onClick(){

function jepBoxes() {





    const divMain = document.querySelector("#box")
    for (let i = 0; i < 5; i++) {

        let divRow = document.createElement("div");
        divRow.setAttribute("id", "row");
        divMain.appendChild(divRow)
        let textRow = document.createTextNode("$100");
        divRow.appendChild(textRow)

        let divRow2 = document.createElement("div");
        divRow2.setAttribute("id", "row2");
        divMain.appendChild(divRow2);
        let textRow2 = document.createTextNode("$200");
        divRow2.appendChild(textRow2);

        let divRow3 = document.createElement("div");
        divRow3.setAttribute("id", "row3");
        divMain.appendChild(divRow3);
        let textRow3 = document.createTextNode("$400");
        divRow3.appendChild(textRow3);

        let divRow4 = document.createElement("div");
        divRow4.setAttribute("id", "row4");
        divMain.appendChild(divRow4)
        let textRow4 = document.createTextNode("$600");
        divRow4.appendChild(textRow4);

        let divRow5 = document.createElement("div");
        divRow5.setAttribute("id", "row5");
        divMain.appendChild(divRow5);
        let textRow5 = document.createTextNode("$800");
        divRow5.appendChild(textRow5);









    }

}




























//const jepHeader = document.createElement("h1")
//jepHeader.setAttribute("id", "header");
//divMain.appendChild(jepHeader);





////const mainDiv = document.createElement("div");
//mainDiv.setAttribute("id", "mdiv");
//const boxDiv = document.createElement("div");
//boxDiv.setAttribute("class", "boxdiv");
//const boxDiv1 = document.createElement("div");
//boxDiv.setAttribute("class", "boxdiv1");
//const boxDiv2 = document.createElement("div");
//boxDiv.setAttribute("class", "boxdiv2");
//const boxDiv3 = document.createElement("div");
//boxDiv.setAttribute("class", "boxdiv3");
//const boxDiv4 = document.createElement("div");
//boxDiv.setAttribute("class", "boxdiv4");














//bodyMaster.appendChild(mainDiv);
//mainDiv.append();
//mainDiv.appendChild(boxDiv);
//boxDiv.append("1");
//mainDiv.appendChild(boxDiv1);
//boxDiv1.append("2");
//mainDiv.appendChild(boxDiv2);
//boxDiv2.append("3");
//mainDiv.appendChild(boxDiv3);
//boxDiv3.append("4");
//mainDiv.appendChild(boxDiv4);
//boxDiv4.append("5");































//const tableMain = document.createElement("table")
//tableMain.setAttribute("class", "table");
//const tableHead = document.createElement("thead");
//tableHead.setAttribute("class", "Thead");
//const tableRow = document.createElement("tr");
//tableRow.setAttribute("class", "tr")
//const tableHcol = document.createElement("th");
//tableHcol.setAttribute("scope", "col");

//const tableBody = document.createElement("tbody");

//const tableHrow = document.createElement("th");
//tableHrow.setAttribute("scope", "row");
//const tableData = document.createElement("td");

//bodyMaster.appendChild(tableMain);
//tableMain.append();
//tableMain.appendChild(tableRow);
//tableRow.append();
//tableRow.appendChild(tableHcol);
//tableHcol.append("1");
//tableRow.appendChild(tableHcol);
//tableHcol.append("2");
//tableRow.appendChild(tableHcol);
//tableHcol.append("3");
//tableRow.appendChild(tableHcol);
//tableHcol.append("4");
//tableRow.appendChild(tableHcol);
//tableHcol.append("5");








//const tableRow = document.createElement("tr");
//tableRow.setAttribute("class", "row");
//const tableHeader = document.createElement("th");
//tableHeader.setAttribute("class", "header");
//const tableData = document.createElement("td");
//tableData.setAttribute("class", "adata");
//const tableData2 = document.createElement("td");
//tableData2.setAttribute("class", "adata");
//const tabledataDiv = document.querySelector("#data")

//tabledataDiv.appendChild(tableRow);
//tableRow.appendChild(tableHeader);
//tableHeader.append();
//tableRow.appendChild(tableData);
//tableData.append();
//tabledataDiv.appendChild(tableRow);
//tableRow.appendChild(tableData);
//tableData.append();
//tableRow.appendChild(tableData2);
//tableData2.append();

//}