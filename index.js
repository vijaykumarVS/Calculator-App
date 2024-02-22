document.addEventListener("DOMContentLoaded", function () {
  const inputBox = document.getElementById("inputbox");
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("operator")) {
        handleOperator(button.innerText);
      } else if (button.classList.contains("equalbtn")) {
        calculate();
      } else {
        inputBox.value += button.innerText;
        inputBox.style.fontSize = "36px"; // Change font size on input
        inputBox.style.color = "black"; // Change text color on input
      }
    });
  });

  function handleOperator(operator) {
    if (operator === "AC") {
      inputBox.value = "";
      resetInputStyles();
    } else if (operator === "DEL") {
      inputBox.value = inputBox.value.slice(0, -1);
    } else {
      inputBox.value += ` ${operator} `;
      inputBox.style.fontSize = "24px"; // Change font size after operation
      inputBox.style.color = "white"; // Change text color after operation to white
    }
  }

  function calculate() {
    const expression = inputBox.value;
    try {
      const result = eval(expression);
      inputBox.value = result;
    } catch (error) {
      inputBox.value = "Error";
    }
    inputBox.style.fontSize = "24px"; // Change font size after calculation
    inputBox.style.color = "white"; // Change text color after calculation to white
  }

  function resetInputStyles() {
    inputBox.style.fontSize = "36px"; // Reset font size
    inputBox.style.color = "black"; // Reset text color
  }
});
