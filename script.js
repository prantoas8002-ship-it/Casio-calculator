const screen = document.getElementById("screen");
const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const point = document.getElementById("point");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const mul = document.getElementById("mul");
const div = document.getElementById("div");
const root = document.getElementById("root");
const inv = document.getElementById("inv");
const pow = document.getElementById("pow");
const percent = document.getElementById("percent");
const equal = document.getElementById("equal");
const on = document.getElementById("on");
const del = document.getElementById("del");
const ac = document.getElementById("ac");
const plus_sign = document.getElementById("plus-sign");
const minus_sign = document.getElementById("minus-sign");
const mul_sign = document.getElementById("mul-sign");
const div_sign = document.getElementById("div-sign");
const pow_sign = document.getElementById("pow-sign");
const inv_sign = document.getElementById("inv-sign");
const percent_sign = document.getElementById("percent-sign");
const equal_sign = document.getElementById("equal-sign");
const root_sign = document.getElementById("root-sign");
let ans = document.getElementById("ans");
let number;
let answer = 0;
let operation;
let ansExist = false;
let repeat; // for repetative operations
let isMul = false; // for percentage

//function for remove sign 

function resetOperators() {
    plus_sign.style.color = "#d1d5db";
    minus_sign.style.color = "#d1d5db";
    mul_sign.style.color = "#d1d5db";
    div_sign.style.color = "#d1d5db";
    pow_sign.style.color = "#d1d5db";
    inv_sign.style.color = "#d1d5db";
    percent_sign.style.color = "#d1d5db";
    equal_sign.style.color = "#d1d5db";
    root_sign.style.color = "#d1d5db";
}

// all numbers are working here

one.addEventListener("click", () => {

    if (screen.innerText.length >= 12 && !ansExist) {
        return;
    }
    if (screen.innerText != "0" && !ansExist)
        screen.innerText += 1;
    else {
        screen.innerText = 1;
        ansExist = false;
        repeat = undefined;
    }
})
two.addEventListener("click", () => {

    if (screen.innerText.length >= 12 && !ansExist) {
        return;
    }
    if (screen.innerText != "0" && !ansExist)
        screen.innerText += 2;
    else {
        screen.innerText = 2;
        ansExist = false;
        repeat = undefined;

    }
})
three.addEventListener("click", () => {

    if (screen.innerText.length >= 12 && !ansExist) {
        return;
    }
    if (screen.innerText != "0" && !ansExist)
        screen.innerText += 3;
    else {
        screen.innerText = 3;
        ansExist = false;
        repeat = undefined;
    }
})
four.addEventListener("click", () => {

    if (screen.innerText.length >= 12 && !ansExist) {
        return;
    }
    if (screen.innerText != "0" && !ansExist)
        screen.innerText += 4;
    else {
        screen.innerText = 4;
        ansExist = false;
        repeat = undefined;
    }
})
five.addEventListener("click", () => {

    if (screen.innerText.length >= 12 && !ansExist) {
        return;
    }
    if (screen.innerText != "0" && !ansExist)
        screen.innerText += 5;
    else {
        screen.innerText = 5;
        ansExist = false;
        repeat = undefined;
    }
})
six.addEventListener("click", () => {

    if (screen.innerText.length >= 12 && !ansExist) {
        return;
    }
    if (screen.innerText != "0" && !ansExist)
        screen.innerText += 6;
    else {
        screen.innerText = 6;
        ansExist = false;
        repeat = undefined;
    }
})
seven.addEventListener("click", () => {

    if (screen.innerText.length >= 12 && !ansExist) {
        return;
    }
    if (screen.innerText != "0" && !ansExist)
        screen.innerText += 7;
    else {
        screen.innerText = 7;
        ansExist = false;
        repeat = undefined;
    }
})
eight.addEventListener("click", () => {

    if (screen.innerText.length >= 12 && !ansExist) {
        return;
    }
    if (screen.innerText != "0" && !ansExist)
        screen.innerText += 8;
    else {
        screen.innerText = 8;
        ansExist = false;
        repeat = undefined;
    }
})
nine.addEventListener("click", () => {

    if (screen.innerText.length >= 12 && !ansExist) {
        return;
    }
    if (screen.innerText != "0" && !ansExist)
        screen.innerText += 9;
    else {
        screen.innerText = 9;
        ansExist = false;
        repeat = undefined;
    }
})
zero.addEventListener("click", () => {

    if (screen.innerText.length >= 12 && !ansExist) {
        return;
    }
    if (screen.innerText != "0" && !ansExist)
        screen.innerText += 0;
    else {
        screen.innerText = 0;
        ansExist = false;
        repeat = undefined;
    }
})
point.addEventListener("click", () => {
    if (screen.innerText.includes(".")) return;

    if (screen.innerText.length >= 12 && !ansExist) {
        return;
    }
    if (screen.innerText != "0" && !ansExist)
        screen.innerText += '.';
    else {
        screen.innerText = '.';
        ansExist = false;
        repeat = undefined;
    }
})

ans.addEventListener("click", () => {

    if (ansExist || screen.innerText === "0") {
        screen.innerText = answer;
    } else {
        screen.innerText += answer;
    }

});

// all operators are working here

plus.addEventListener("click", () => {
    operation = "plus";
    resetOperators();
    plus_sign.style.color = "black";
    number = Number(screen.innerText);
    answer = number;
    screen.innerText = "";
})
minus.addEventListener("click", () => {
    operation = "minus";
    resetOperators();
    minus_sign.style.color = "black";
    number = Number(screen.innerText);
    answer = number;
    screen.innerText = "";
})
mul.addEventListener("click", () => {
    operation = "mul";
    resetOperators();
    mul_sign.style.color = "black";
    isMul = true;
    number = Number(screen.innerText);
    answer = number;
    screen.innerText = "";
})
div.addEventListener("click", () => {
    operation = "div";
    resetOperators();
    div_sign.style.color = "black";
    number = Number(screen.innerText);
    answer = number;
    screen.innerText = "";
})
pow.addEventListener("click", () => {
    operation = "pow";
    resetOperators();
    pow_sign.style.color = "black";
    number = Number(screen.innerText);
    answer = number;
    screen.innerText = "";
})
percent.addEventListener("click", () => {
    resetOperators();
    percent_sign.style.color = "black";
    if (!isMul) return;
    console.log("percent clicked");
    operation = "percent";
    if (repeat == undefined) repeat = Number(screen.innerText);
    screen.innerText = answer * (repeat / 100);
    ansExist = true;
    number = null;
    answer = screen.innerText;
})
inv.addEventListener("click", () => {
    console.log("pressed inverse");
    operation = "inverse";
    resetOperators();
    inv_sign.style.color = "black";
    number = Number(screen.innerText);
    answer = number;
    screen.innerText = 1 / answer;
    answer = screen.innerText;
    ansExist = true;
})
root.addEventListener("click", () => {
    console.log("pressed root");
    operation = "root";
    resetOperators();
    root_sign.style.color = "black";
    number = Number(screen.innerText);
    answer = number;
    screen.innerText = Math.sqrt(answer);
    answer = screen.innerText;
    ansExist = true;
})
on.addEventListener("click", () => {
    console.log("clicked on");
    screen.innerText = "0";
    number = null;
    operation = null;
    isMul = false;
    ansExist = false;
    repeat = undefined;
    answer = 0;
    resetOperators();
})
ac.addEventListener("click", () => {
    console.log("clicked ac");
    screen.innerText = "0";
    number = null;
    operation = null;
    isMul = false;
    ansExist = false;
    repeat = undefined;
    resetOperators();
})
del.addEventListener("click", () => {
    console.log("del clicked");
    if (ansExist) return;
    screen.innerText = screen.innerText.slice(0, -1);

    if (screen.innerText === "") screen.innerText = 0;
})

// pressing equal work here 

equal.addEventListener("click", () => {
    resetOperators();
    equal_sign.style.color = "black";

    switch (operation) {
        case "plus":
            if (repeat === undefined) repeat = Number(screen.innerText);
            screen.innerText = answer + repeat;
            answer = Number(screen.innerText);
            ansExist = true;
            number = null;
            console.log(operation);
            break;
        case "minus":
            if (repeat === undefined) repeat = Number(screen.innerText);
            screen.innerText = answer - repeat;
            answer = Number(screen.innerText);
            ansExist = true;
            number = null;
            console.log(operation);
            break;
        case "mul":
            if (repeat === undefined) repeat = Number(screen.innerText);
            screen.innerText = answer * repeat;
            answer = Number(screen.innerText);
            ansExist = true;
            number = null;
            isMul = false;
            console.log(operation);
            break;
        case "div":
            if (repeat === undefined) repeat = Number(screen.innerText);
            screen.innerText = answer / repeat;
            answer = Number(screen.innerText);
            ansExist = true;
            number = null;
            console.log(operation);
            break;
        case "pow":
            if (repeat === undefined) repeat = Number(screen.innerText);
            screen.innerText = answer ** repeat;
            answer = Number(screen.innerText);
            ansExist = true;
            number = null;
            console.log(operation);
            break;
        default:
            break;


    }
})

