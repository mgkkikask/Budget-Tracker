let income = 0;

function goToInputPage() {
    window.location.href = "input page here";
}

function goToResultsPage() {
    window.location.href = "results page here";
}

function storeIncome() {
    income = parseFloat(document.getElementById("income").value);
    console.log("Stored income: ", income);
}

function addExpense() {
    const expensesDiv = document.getElementById("expenses");
    const container = document.createElement("div");
    const nameInput = document.createElement("input");
    const amountInput = document.createElement("input");
    amountInput.type = "number";
    amountInput.placeholder = "Amount";
    container.appendChild(nameInput);
    container.appendChild(amountInput);
    expensesDiv.appendChild(container);
}
function calculation() {
  const expensesDiv = document.getElementById("expenses");
  const inputs = expensesDiv.querySelectorAll("input");
  let totalCost = 0;

  for (let i = 1; i < inputs.length; i += 2) {
    const amount = parseFloat(inputs[i].value) || 0;
    totalCost += amount;
  }

  const remainder = income - totalCost;
  document.getElementById("result").textContent = "Remainder: " + remainder.toFixed(2);
}
