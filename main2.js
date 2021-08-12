
const pushButton = document.querySelector("#button");
const bodyMaster = document.querySelector("#masterbody");
const questionAnswer = document.querySelector("#answers");
//=========================================================
//fucntion to redirect to Double Jeopardy

const jeoDouble = document.querySelector("#button2");
jepBoxes.addEventListener("click", jeo2);
function jeo2() {
    location.href = "index2.html"
}





//=====================================================

//Total score    
let totalScore = localStorage.getItem("myscore");

pushButton.addEventListener("click", jepBoxes);

//function onClick builds Jeopardy game

function jepBoxes() {

    const divMain = document.querySelector("#box");
    const divSub = document.querySelector("#box2");

    //======================================================
    //Jeopardy catagories
    let divCat = document.createElement("div");
    divCat.setAttribute("id", "catagory");
    divSub.appendChild(divCat)


    let divCat2 = document.createElement("div");
    divCat2.setAttribute("id", "catagory2");
    divSub.appendChild(divCat2);
    

    let divCat3 = document.createElement("div");
    divCat3.setAttribute("id", "catagory3");
    divSub.appendChild(divCat3);
    

    let divCat4 = document.createElement("div");
    divCat4.setAttribute("id", "catagory4");
    divSub.appendChild(divCat4)
   

    let divCat5 = document.createElement("div");
    divCat5.setAttribute("id", "catagory5");
    divSub.appendChild(divCat5);
    


    //==================================================================
    //===================================================================

    //Questions 


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
    let textRow3 = document.createTextNode("$300");
    divRow3.appendChild(textRow3);

    let divRow4 = document.createElement("div");
    divRow4.setAttribute("id", "row4");
    divMain.appendChild(divRow4)
    let textRow4 = document.createTextNode("$400");
    divRow4.appendChild(textRow4);

    let divRow5 = document.createElement("div");
    divRow5.setAttribute("id", "row5");
    divMain.appendChild(divRow5);
    let textRow5 = document.createTextNode("$500");
    divRow5.appendChild(textRow5);
    //========================================================

    let divRow6 = document.createElement("div");
    divRow6.setAttribute("id", "row6");
    divMain.appendChild(divRow6)
    let textRow6 = document.createTextNode("$100");
    divRow6.appendChild(textRow6)

    let divRow7 = document.createElement("div");
    divRow7.setAttribute("id", "row7");
    divMain.appendChild(divRow7);
    let textRow7 = document.createTextNode("$200");
    divRow7.appendChild(textRow7);

    let divRow8 = document.createElement("div");
    divRow8.setAttribute("id", "row8");
    divMain.appendChild(divRow8);
    let textRow8 = document.createTextNode("$300");
    divRow8.appendChild(textRow8);

    let divRow9 = document.createElement("div");
    divRow9.setAttribute("id", "row9");
    divMain.appendChild(divRow9)
    let textRow9 = document.createTextNode("$400");
    divRow9.appendChild(textRow9);

    let divRow10 = document.createElement("div");
    divRow10.setAttribute("id", "row10");
    divMain.appendChild(divRow10);
    let textRow10 = document.createTextNode("$500");
    divRow10.appendChild(textRow10);

    //============================================================
    let divRow11 = document.createElement("div");
    divRow11.setAttribute("id", "row11");
    divMain.appendChild(divRow11)
    let textRow11 = document.createTextNode("$100");
    divRow11.appendChild(textRow11)

    let divRow12 = document.createElement("div");
    divRow12.setAttribute("id", "row12");
    divMain.appendChild(divRow12);
    let textRow12 = document.createTextNode("$200");
    divRow12.appendChild(textRow12);

    let divRow13 = document.createElement("div");
    divRow13.setAttribute("id", "row13");
    divMain.appendChild(divRow13);
    let textRow13 = document.createTextNode("$300");
    divRow13.appendChild(textRow13);

    let divRow14 = document.createElement("div");
    divRow14.setAttribute("id", "row14");
    divMain.appendChild(divRow14)
    let textRow14 = document.createTextNode("$400");
    divRow14.appendChild(textRow14);

    let divRow15 = document.createElement("div");
    divRow15.setAttribute("id", "row15");
    divMain.appendChild(divRow15);
    let textRow15 = document.createTextNode("$500");
    divRow15.appendChild(textRow15);
    //============================================================

    let divRow16 = document.createElement("div");
    divRow16.setAttribute("id", "row16");
    divMain.appendChild(divRow16)
    let textRow16 = document.createTextNode("$100");
    divRow16.appendChild(textRow16)

    let divRow17 = document.createElement("div");
    divRow17.setAttribute("id", "row17");
    divMain.appendChild(divRow17);
    let textRow17 = document.createTextNode("$200");
    divRow17.appendChild(textRow17);

    let divRow18 = document.createElement("div");
    divRow18.setAttribute("id", "row18");
    divMain.appendChild(divRow18);
    let textRow18 = document.createTextNode("$300");
    divRow18.appendChild(textRow18);

    let divRow19 = document.createElement("div");
    divRow19.setAttribute("id", "row19");
    divMain.appendChild(divRow19)
    let textRow19 = document.createTextNode("$400");
    divRow19.appendChild(textRow19);

    let divRow20 = document.createElement("div");
    divRow20.setAttribute("id", "row20");
    divMain.appendChild(divRow20);
    let textRow20 = document.createTextNode("$500");
    divRow20.appendChild(textRow20);

    //==============================================================
    let divRow21 = document.createElement("div");
    divRow21.setAttribute("id", "row21");
    divMain.appendChild(divRow21)
    let textRow21 = document.createTextNode("$100");
    divRow21.appendChild(textRow21)

    let divRow22 = document.createElement("div");
    divRow22.setAttribute("id", "row22");
    divMain.appendChild(divRow22);
    let textRow22 = document.createTextNode("$200");
    divRow22.appendChild(textRow22);

    let divRow23 = document.createElement("div");
    divRow23.setAttribute("id", "row23");
    divMain.appendChild(divRow23);
    let textRow23 = document.createTextNode("$300");
    divRow23.appendChild(textRow23);

    let divRow24 = document.createElement("div");
    divRow24.setAttribute("id", "row24");
    divMain.appendChild(divRow24)
    let textRow24 = document.createTextNode("$400");
    divRow24.appendChild(textRow24);

    let divRow25 = document.createElement("div");
    divRow25.setAttribute("id", "row25");
    divMain.appendChild(divRow25);
    let textRow25 = document.createTextNode("$500");
    divRow25.appendChild(textRow25);
    //========================================================    
    //========================================================

    //Question array storage from for loop below async function
    let cataTopics = []
    let oneHundredarray = [];
    let twoHundredarray = [];
    let threeHundredarray = [];
    let fourHundredarray = [];
    let fiveHundredarray = []
    console.log(cataTopics[0], "cat")
    console.log(cataTopics)
    console.log(oneHundredarray);
    console.log(twoHundredarray);
    console.log(threeHundredarray);
    console.log(fourHundredarray);
    console.log(fiveHundredarray);


    //=======================================================
   
    
    //Random generator
    function randomNumber() {
        const x = document.querySelector("#questions");

        let y = Math.random()
        let xe = Math.floor(y * 40000)
        let showTime = Math.ceil(xe / 100) * 100

        //Async function to grab data
        async function main() {
            const rawData = await fetch("jeopardy.json");
            const data = await rawData.json();
            console.log('data', data[xe], data, xe, data[100].showNumber)



            console.log(showTime)
            //console.log(dataNum)
            //console.log(dataNum.value)


            //For loop to gather and push selected data to arrays listed above button eventlistners
            let b = 0
            for (let i = 0; i < 99; i++) {
                b = showTime + i;
                
                //Add slowdown function to allow time to process information below (if statements)
                slowDown(i);
                function slowDown(i) {
                    setTimeout(function(){   
                    }, 24000 * i);
                }
                    if (data[b].category == data[b].category && data[b].value == "$100" && data[b].round == "Jeopardy!") {
                        cataTopics.push(data[b]);

                    }

                    if (data[b].category == data[b].category && data[b].value == "$100" && data[b].round == "Jeopardy!") {
                        oneHundredarray.push(data[b]);
                        //console.log(data[b]);
                        //console.log(data[b].category);
                        //console.log(data[b].question);
                        //console.log(oneHundredarray[0]);
                    }
                    if (data[b].category == data[b].category && data[b].value == "$200" && data[b].round == "Jeopardy!") {
                        twoHundredarray.push(data[b]);

                    }
                    if (data[b].category == data[b].category && data[b].value == "$300" && data[b].round == "Jeopardy!") {
                        threeHundredarray.push(data[b]);

                    }
                    if (data[b].category == data[b].category && data[b].value == "$400" && data[b].round == "Jeopardy!") {
                        fourHundredarray.push(data[b]);

                    }
                    if (data[b].category == data[b].category && data[b].value == "$500" && data[b].round == "Jeopardy!") {
                        fiveHundredarray.push(data[b]);






                    }


            }
//==========================================================================
//==========================================================================
//Add the jeopardy categories

            const catCategory = document.querySelector("#catagory");
            catValue = cataTopics[0].category;
            console.log(catValue,"catvalue")
            console.log(cataTopics[0])
            catCategory.innerHTML = catValue
            let textCat = document.createTextNode(catCategory.innerHTML);
            divCat.appendChild(textCat);

            const cat2Category = document.querySelector("#catagory2");
            cat2Value = cataTopics[1].category; 
            cat2Category.innerHTML = cat2Value
            let text2Cat = document.createTextNode(cat2Category.innerHTML);
            divCat2.appendChild(text2Cat);

            const cat3Category = document.querySelector("#catagory3");
            cat3Value = cataTopics[2].category; 
            cat3Category.innerHTML = cat3Value
            let text3Cat = document.createTextNode(cat3Category.innerHTML);
            divCat3.appendChild(text3Cat);

            const cat4Category = document.querySelector("#catagory4");
            cat4Value = cataTopics[3].category;
            cat4Category.innerHTML = cat4Value
            let text4Cat = document.createTextNode(cat4Category.innerHTML);
            divCat4.appendChild(text4Cat);

            const cat5Category = document.querySelector("#catagory5");
            cat5Value = cataTopics[4].category; 
            cat5Category.innerHTML = cat5Value
            let text5Cat = document.createTextNode(cat5Category.innerHTML);
            divCat5.appendChild(text5Cat);

            //======================================================       

            //console.log(Math.round(y * 10000), y);
            //console.log(Math.ceil(xe), "xe")
            //Random generator called
        } main()
    } randomNumber();

    //====================================================
    //===================================================
    //Score keeper

  
    










    //Game button selection
    const questionBlock = document.querySelector("#questions");
    const findRow = document.querySelector("#row");
    findRow.addEventListener("click", oneHundred)

    function oneHundred() {
        oneValue = oneHundredarray[0];
        questionBlock.innerHTML = oneValue.question;

        const rightButton = document.querySelector("#answerbutton");
        const myScore = document.querySelector("#score");
        rightButton.addEventListener("click", answerClick)

        function answerClick() {
            if (questionAnswer.value === oneValue.answer) {
                totalScore = totalScore + 100
                myScore.innerHTML = totalScore
               localStorage.setItem("myscore", myScore.innerHTML);
            }
        }
    }

    const findRow2 = document.querySelector("#row2");
    findRow2.addEventListener("click", twoHundred)
    function twoHundred() {
        twoValue = twoHundredarray[0];
        questionBlock.innerHTML = twoValue.question;

        const rightButton = document.querySelector("#answerbutton");
        const myScore = document.querySelector("#score");
        rightButton.addEventListener("click", answerClick)

        function answerClick() {
            if (questionAnswer.value === twoValue.answer) {
                totalScore = totalScore + 200
                myScore.innerHTML = totalScore;
                localStorage.setItem("myscore", myScore.innerHTML);
            }
        }
    }

    const findRow3 = document.querySelector("#row3");
    findRow3.addEventListener("click", fourHundred)
    function fourHundred() {
        threeValue = threeHundredarray[0];
        questionBlock.innerHTML = threeValue.question;

        const rightButton = document.querySelector("#answerbutton");
        const myScore = document.querySelector("#score");
        rightButton.addEventListener("click", answerClick)

        function answerClick() {
            if (questionAnswer.value === threeValue.answer) {
                totalScore = totalScore + 300
                myScore.innerHTML = totalScore;
                localStorage.setItem("myscore", myScore.innerHTML);
            }
        }
    }

    const findRow4 = document.querySelector("#row4");
    findRow4.addEventListener("click", sixHundred)
    function sixHundred() {
        fourValue = fourHundredarray[0];
        questionBlock.innerHTML = fourValue.question;

        const rightButton = document.querySelector("#answerbutton");
        const myScore = document.querySelector("#score");
        rightButton.addEventListener("click", answerClick)

        function answerClick() {
            if (questionAnswer.value === fourValue.answer) {
                totalScore = totalScore + 400
                myScore.innerHTML = totalScore;
                localStorage.setItem("myscore", myScore.innerHTML);
            }
        }
    }

    const findRow5 = document.querySelector("#row5");
    findRow5.addEventListener("click", eightHundred)
    function eightHundred() {
        fiveValue = fiveHundredarray[0];
        questionBlock.innerHTML = fiveValue.question;

        const rightButton = document.querySelector("#answerbutton");
        const myScore = document.querySelector("#score");
        rightButton.addEventListener("click", answerClick)

        function answerClick() {
            if (questionAnswer.value === fiveValue.answer) {
                totalScore = totalScore + 500
                myScore.innerHTML = totalScore;
                localStorage.setItem("myscore", myScore.innerHTML);
            }
        }
    }
    //=========================================================
    const findRow6 = document.querySelector("#row6");
    findRow6.addEventListener("click", oneHundred2)
    function oneHundred2() {
        one2Value = oneHundredarray[1];
        questionBlock.innerHTML = one2Value.question;

        const rightButton = document.querySelector("#answerbutton");
        const myScore = document.querySelector("#score");
        rightButton.addEventListener("click", answerClick)

        function answerClick() {
            if (questionAnswer.value === one2Value.answer) {
                totalScore = totalScore + 100
                myScore.innerHTML = totalScore;
                localStorage.setItem("myscore", myScore.innerHTML);
            }
        }
    }

    const findRow7 = document.querySelector("#row7");
    findRow7.addEventListener("click", twoHundred2)
    function twoHundred2() {
        two2Value = twoHundredarray[1];
        questionBlock.innerHTML = two2Value.question;

        const rightButton = document.querySelector("#answerbutton");
        const myScore = document.querySelector("#score");
        rightButton.addEventListener("click", answerClick)

        function answerClick() {
            if (questionAnswer.value === two2Value.answer) {
                totalScore = totalScore + 200
                myScore.innerHTML = totalScore;
                localStorage.setItem("myscore", myScore.innerHTML);
            }
        }
    }

    const findRow8 = document.querySelector("#row8");
    findRow8.addEventListener("click", fourHundred2)
    function fourHundred2() {
        three2Value = threeHundredarray[1];
        questionBlock.innerHTML = three2Value.question;

        const rightButton = document.querySelector("#answerbutton");
        const myScore = document.querySelector("#score");
        rightButton.addEventListener("click", answerClick)

        function answerClick() {
            if (questionAnswer.value === three2Value.answer) {
                totalScore = totalScore + 300
                myScore.innerHTML = totalScore;
                localStorage.setItem("myscore", myScore.innerHTML);
            }
        }
    }

    const findRow9 = document.querySelector("#row9");
    findRow9.addEventListener("click", sixHundred2)
    function sixHundred2() {
        four2Value = fourHundredarray[1];
        questionBlock.innerHTML = four2Value.question;

        const rightButton = document.querySelector("#answerbutton");
        const myScore = document.querySelector("#score");
        rightButton.addEventListener("click", answerClick)

        function answerClick() {
            if (questionAnswer.value === four2Value.answer) {
                totalScore = totalScore + 400
                myScore.innerHTML = totalScore;
                localStorage.setItem("myscore", myScore.innerHTML);
            }
        }
    }

    const findRow10 = document.querySelector("#row10");
    findRow10.addEventListener("click", eightHundred2)
    function eightHundred2() {
        five2Value = fiveHundredarray[1];
        questionBlock.innerHTML = five2Value.question;

        const rightButton = document.querySelector("#answerbutton");
        const myScore = document.querySelector("#score");
        rightButton.addEventListener("click", answerClick)

        function answerClick() {
            if (questionAnswer.value === five2Value.answer) {
                totalScore = totalScore + 500
                myScore.innerHTML = totalScore;
                localStorage.setItem("myscore", myScore.innerHTML);
            }
        }
    }
    //==========================================================
    const findRow11 = document.querySelector("#row11");
    findRow11.addEventListener("click", oneHundred3)
    function oneHundred3() {
        one3Value = oneHundredarray[2];
        questionBlock.innerHTML = one3Value.question;

        const rightButton = document.querySelector("#answerbutton");
        const myScore = document.querySelector("#score");
        rightButton.addEventListener("click", answerClick)

        function answerClick() {
            if (questionAnswer.value === one3Value.answer) {
                totalScore = totalScore + 100
                myScore.innerHTML = totalScore;
                localStorage.setItem("myscore", myScore.innerHTML);
            }
        }
    }

    const findRow12 = document.querySelector("#row12");
    findRow12.addEventListener("click", twoHundred3)
    function twoHundred3() {
        two3Value = twoHundredarray[2];
        questionBlock.innerHTML = two3Value.question;

        const rightButton = document.querySelector("#answerbutton");
        const myScore = document.querySelector("#score");
        rightButton.addEventListener("click", answerClick)

        function answerClick() {
            if (questionAnswer.value === two3Value.answer) {
                totalScore = totalScore + 200
                myScore.innerHTML = totalScore;
                localStorage.setItem("myscore", myScore.innerHTML);
            }
        }
    }

    const findRow13 = document.querySelector("#row13");
    findRow13.addEventListener("click", fourHundred3)
    function fourHundred3() {
        three3Value = threeHundredarray[2];
        questionBlock.innerHTML = three3Value.question;

        const rightButton = document.querySelector("#answerbutton");
        const myScore = document.querySelector("#score");
        rightButton.addEventListener("click", answerClick)

        function answerClick() {
            if (questionAnswer.value === three3Value.answer) {
                totalScore = totalScore + 300
                myScore.innerHTML = totalScore;
                localStorage.setItem("myscore", myScore.innerHTML);
            }
        }
    }

    const findRow14 = document.querySelector("#row14");
    findRow14.addEventListener("click", sixHundred3)
    function sixHundred3() {
        four3Value = fourHundredarray[2];
        questionBlock.innerHTML = four3Value.question;

        const rightButton = document.querySelector("#answerbutton");
        const myScore = document.querySelector("#score");
        rightButton.addEventListener("click", answerClick)

        function answerClick() {
            if (questionAnswer.value === four3Value.answer) {
                totalScore = totalScore + 400
                myScore.innerHTML = totalScore;
                localStorage.setItem("myscore", myScore.innerHTML);
            }
        }
    }

    const findRow15 = document.querySelector("#row15");
    findRow15.addEventListener("click", eightHundred3)
    function eightHundred3() {
        five3Value = fiveHundredarray[2];
        questionBlock.innerHTML = five3Value.question;

        const rightButton = document.querySelector("#answerbutton");
        const myScore = document.querySelector("#score");
        rightButton.addEventListener("click", answerClick)

        function answerClick() {
            if (questionAnswer.value === five3Value.answer) {
                totalScore = totalScore + 500
                myScore.innerHTML = totalScore;
                localStorage.setItem("myscore", myScore.innerHTML);
            }
        }
    }
    //==========================================================
    const findRow16 = document.querySelector("#row16");
    findRow16.addEventListener("click", oneHundred4)
    function oneHundred4() {
        one4Value = oneHundredarray[3];
        questionBlock.innerHTML = one4Value.question;

        const rightButton = document.querySelector("#answerbutton");
        const myScore = document.querySelector("#score");
        rightButton.addEventListener("click", answerClick)

        function answerClick() {
            if (questionAnswer.value === one4Value.answer) {
                totalScore = totalScore + 100
                myScore.innerHTML = totalScore;
                localStorage.setItem("myscore", myScore.innerHTML);
            }
        }
    }

    const findRow17 = document.querySelector("#row17");
    findRow17.addEventListener("click", twoHundred4)
    function twoHundred4() {
        two4Value = twoHundredarray[3];
        questionBlock.innerHTML = two4Value.question;

        const rightButton = document.querySelector("#answerbutton");
        const myScore = document.querySelector("#score");
        rightButton.addEventListener("click", answerClick)

        function answerClick() {
            if (questionAnswer.value === two4Value.answer) {
                totalScore = totalScore + 200
                myScore.innerHTML = totalScore;
                localStorage.setItem("myscore", myScore.innerHTML);
            }
        }
    }

    const findRow18 = document.querySelector("#row18");
    findRow18.addEventListener("click", fourHundred4)
    function fourHundred4() {
        three4Value = threeHundredarray[3];
        questionBlock.innerHTML = three4Value.question;

        const rightButton = document.querySelector("#answerbutton");
        const myScore = document.querySelector("#score");
        rightButton.addEventListener("click", answerClick)

        function answerClick() {
            if (questionAnswer.value === three4Value.answer) {
                totalScore = totalScore + 300
                myScore.innerHTML = totalScore;
                localStorage.setItem("myscore", myScore.innerHTML);
            }
        }
    }

    const findRow19 = document.querySelector("#row19");
    findRow19.addEventListener("click", sixHundred4)
    function sixHundred4() {
        four4Value = fourHundredarray[3];
        questionBlock.innerHTML = four4Value.question;

        const rightButton = document.querySelector("#answerbutton");
        const myScore = document.querySelector("#score");
        rightButton.addEventListener("click", answerClick)

        function answerClick() {
            if (questionAnswer.value === four4Value.answer) {
                totalScore = totalScore + 400
                myScore.innerHTML = totalScore;
                localStorage.setItem("myscore", myScore.innerHTML);
            }
        }
    }

    const findRow20 = document.querySelector("#row20");
    findRow20.addEventListener("click", eightHundred4)
    function eightHundred4() {
        five4Value = fiveHundredarray[3];
        questionBlock.innerHTML = five4Value.question;

        const rightButton = document.querySelector("#answerbutton");
        const myScore = document.querySelector("#score");
        rightButton.addEventListener("click", answerClick)

        function answerClick() {
            if (questionAnswer.value === five4Value.answer) {
                totalScore = totalScore + 500
                myScore.innerHTML = totalScore;
                localStorage.setItem("myscore", myScore.innerHTML);
            }
        }
    }
    //=========================================================
    const findRow21 = document.querySelector("#row21");
    findRow21.addEventListener("click", oneHundred5)
    function oneHundred5() {
        one5Value = oneHundredarray[4];
        questionBlock.innerHTML = one5Value.question;

        const rightButton = document.querySelector("#answerbutton");
        const myScore = document.querySelector("#score");
        rightButton.addEventListener("click", answerClick)

        function answerClick() {
            if (questionAnswer.value === one5Value.answer) {
                totalScore = totalScore + 100
                myScore.innerHTML = totalScore;
                localStorage.setItem("myscore", myScore.innerHTML);
            }
        }
    }

    const findRow22 = document.querySelector("#row22");
    findRow22.addEventListener("click", twoHundred5)
    function twoHundred5() {
        two5Value = twoHundredarray[4];
        questionBlock.innerHTML = two5Value.question;

        const rightButton = document.querySelector("#answerbutton");
        const myScore = document.querySelector("#score");
        rightButton.addEventListener("click", answerClick)

        function answerClick() {
            if (questionAnswer.value === two5Value.answer) {
                totalScore = totalScore + 200
                myScore.innerHTML = totalScore;
                localStorage.setItem("myscore", myScore.innerHTML);
            }
        }
    }

    const findRow23 = document.querySelector("#row23");
    findRow23.addEventListener("click", fourHundred5)
    function fourHundred5() {
        three5Value = threeHundredarray[4];
        questionBlock.innerHTML = three5Value.question;

        const rightButton = document.querySelector("#answerbutton");
        const myScore = document.querySelector("#score");
        rightButton.addEventListener("click", answerClick)

        function answerClick() {
            if (questionAnswer.value === three5Value.answer) {
                totalScore = totalScore + 300
                myScore.innerHTML = totalScore;
                localStorage.setItem("myscore", myScore.innerHTML);
            }
        }
    }

    const findRow24 = document.querySelector("#row24");
    findRow24.addEventListener("click", sixHundred5)
    function sixHundred5() {
        four5Value = fourHundredarray[4];
        questionBlock.innerHTML = four5Value.question;

        const rightButton = document.querySelector("#answerbutton");
        const myScore = document.querySelector("#score");
        rightButton.addEventListener("click", answerClick)

        function answerClick() {
            if (questionAnswer.value === four5Value.answer) {
                totalScore = totalScore + 400
                myScore.innerHTML = totalScore;
                localStorage.setItem("myscore", myScore.innerHTML);
            }
        }
    }

    const findRow25 = document.querySelector("#row25");
    findRow25.addEventListener("click", eightHundred5)
    function eightHundred5() {
        five5Value = fiveHundredarray[4];
        questionBlock.innerHTML = five5Value.question;

        const rightButton = document.querySelector("#answerbutton");
        const myScore = document.querySelector("#score");
        rightButton.addEventListener("click", answerClick)

        function answerClick() {
            if (questionAnswer.value === fiveValue.answer) {
                totalScore = totalScore + 500
                myScore.innerHTML = totalScore;
                localStorage.setItem("myscore", myScore.innerHTML);
            }
        }
    }
    //=============================================================    
    //=============================================================

    //=====================================================

    //=====================================================

    //=====================================================

    //=====================================================

    //=====================================================

    //=============================================================
    //=============================================================



    //==========================================================








    //====================================================
    //================================================
}


























//=========================================================
//=========================================================
//=========================================================



//Things that did not provide a solution





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


//for (let i = 0; i < 5; i++) {

    //let divRow = document.createElement("div");
    //divRow.setAttribute("id", "row");
    //divMain.appendChild(divRow)
    //let textRow = document.createTextNode("$100");
    //divRow.appendChild(textRow)

   // let divRow2 = document.createElement("div");
   // divRow2.setAttribute("id", "row2");
    //divMain.appendChild(divRow2);
    //let textRow2 = document.createTextNode("$200");
    //divRow2.appendChild(textRow2);

   // let divRow3 = document.createElement("div");
    //divRow3.setAttribute("id", "row3");
    //divMain.appendChild(divRow3);
   // let textRow3 = document.createTextNode("$400");
    //divRow3.appendChild(textRow3);

   // let divRow4 = document.createElement("div");
    //divRow4.setAttribute("id", "row4");
    //divMain.appendChild(divRow4)
    //let textRow4 = document.createTextNode("$600");
    //divRow4.appendChild(textRow4);

    //let divRow5 = document.createElement("div");
    //divRow5.setAttribute("id", "row5");
    //divMain.appendChild(divRow5);
    //let textRow5 = document.createTextNode("$800");
    //divRow5.appendChild(textRow5);


//}
//const findRow = document.querySelector("#row");

//findRow.addEventListener("click", oneHundred)
//function oneHundred() {
 //   console.log("one")
 //}

//const findRow2 = document.querySelector("#row2");
//findRow2.addEventListener("click", twoHundred)
//function twoHundred() { }

//const findRow3 = document.querySelector("#row3");
//findRow3.addEventListener("click", fourHundred)
//function fourHundred() { }

//const findRow4 = document.querySelector("#row4");
//findRow4.addEventListener("click", sixHundred)
//function sixHundred() { }

//const findRow5 = document.querySelector("#row5");
//findRow5.addEventListener("click", eightHundred)
//function eightHundred() { }











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