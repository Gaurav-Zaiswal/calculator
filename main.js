let numString = "";

let displayArea = document.querySelector(".display");
let firstTwo = document.querySelector("#item1");
let zero = document.querySelector("#o");
let one = document.querySelector("#on");
let two = document.querySelector("#t");
let three = document.querySelector("#th");
let four = document.querySelector("#f");
let five = document.querySelector("#fi");
let six = document.querySelector("#s");
let seven = document.querySelector("#se");
let eight = document.querySelector("#e");
let nine = document.querySelector("#n");
let plusSign = document.querySelector("#add");
let minusSign = document.querySelector("#subtract");
let multiplySign = document.querySelector("#multiply");
let divisionSign = document.querySelector("#division");
let equalSign = document.querySelector("#equal");
let clearAll = document.querySelector("#clear");
let deleteBtn = document.querySelector("#delete");


zero.addEventListener("click", writeNumberAndOperator);
one.addEventListener("click", writeNumberAndOperator);
two.addEventListener("click", writeNumberAndOperator);
three.addEventListener("click", writeNumberAndOperator);
four.addEventListener("click", writeNumberAndOperator);
five.addEventListener("click", writeNumberAndOperator);
six.addEventListener("click", writeNumberAndOperator);
seven.addEventListener("click", writeNumberAndOperator);
eight.addEventListener("click", writeNumberAndOperator);
nine.addEventListener("click", writeNumberAndOperator);
plusSign.addEventListener("click", writeNumberAndOperator);
minusSign.addEventListener("click", writeNumberAndOperator);
multiplySign.addEventListener("click", writeNumberAndOperator);
divisionSign.addEventListener("click", writeNumberAndOperator);
equalSign.addEventListener("click", writeNumberAndOperator);
clearAll.addEventListener("click", writeNumberAndOperator);
deleteBtn.addEventListener("click", writeNumberAndOperator);


function writeNumberAndOperator(e) {
    // console.log(e.target);
    if (e.target.id === "equal") {
        displayArea.innerText = eval(numString);
        numString = "";

    } else if (e.target.id == "clear") {
        numString = "";
        displayArea.innerText = numString;
    } else if (e.target.id == "delete"){
        numString = numString.slice(0, -1);
        displayArea.innerText = numString;
    }else {
        numString += e.target.innerText;
        displayArea.innerText = numString;
    }

}
