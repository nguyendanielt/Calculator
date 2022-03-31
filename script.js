const numberBtn = document.getElementsByClassName("number");
const operatorBtn = document.getElementsByClassName("operator");
const equalsBtn = document.getElementById("equals");
const clearBtn = document.getElementById("clear");
const deleteBtn = document.getElementById("delete");
const decimalBtn = document.getElementById("decimal");
const calcDisplay = document.getElementById("calc-display");
let currExpression = "";

for (let i = 0; i < numberBtn.length; i++) {
  numberBtn[i].addEventListener("click", function() {
    if (calcDisplay.textContent.length < 26) {
      if (calcDisplay.textContent === "0") {
          calcDisplay.textContent = numberBtn[i].textContent;
      } else {
          calcDisplay.textContent += numberBtn[i].textContent;
      }
      currExpression += numberBtn[i].textContent;
  }
  });
}

for (let i = 0; i < operatorBtn.length; i++) {
  operatorBtn[i].addEventListener("click", function() {
    if (calcDisplay.textContent.length < 26) {
      switch (operatorBtn[i].textContent) {
        case '+':
          calcDisplay.textContent += " " + operatorBtn[i].textContent + " ";
          currExpression += '+';
          break;
        case '-':
          calcDisplay.textContent += " " + operatorBtn[i].textContent + " ";
          currExpression += '-';
          break;
        case '×':
          calcDisplay.textContent += " " + operatorBtn[i].textContent + " ";
          currExpression += '*';
          break;
        case '÷':
          calcDisplay.textContent += " " + operatorBtn[i].textContent + " ";
          currExpression += '/';
          break;
      }
    }
  });
}

equalsBtn.addEventListener("click", function() {
  calcDisplay.textContent = eval(currExpression);
  currExpression = calcDisplay.textContent;
});

clearBtn.addEventListener("click", function() {
  currExpression = "";
  calcDisplay.textContent = "0";
});

deleteBtn.addEventListener("click", function() {
  calcDisplay.textContent = calcDisplay.textContent.slice(0, -1);
  currExpression = currExpression.slice(0, -1);
  if (calcDisplay.textContent === "") {
    calcDisplay.textContent = "0";
  }
});

decimalBtn.addEventListener("click", function() {
  calcDisplay.textContent += '.';
  currExpression += '.';
});