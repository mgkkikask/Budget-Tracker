let income = 0;

function goToInputPage() {
    window.location.href = "input.html";
}

function goToResultsPage() {
    const expenses = [];
    const inputs = document.getElementById("expenses").querySelectorAll("input");
    for (let i = 0; i < inputs.length; i += 2) {
        expenses.push({
            name: inputs[i].value,
            amount: parseFloat(inputs[i + 1].value) || 0
        });
    }
    localStorage.setItem("expenses", JSON.stringify(expenses));

    const bonuses = [];
    const bonusInputs = document.getElementById("bonuses").querySelectorAll("input");
    for (let i = 0; i < bonusInputs.length; i += 2) {
        bonuses.push({
            name: bonusInputs[i].value,
            amount: parseFloat(bonusInputs[i + 1].value) || 0
        });
    }
    localStorage.setItem("bonuses", JSON.stringify(bonuses));

    window.location.href = "results.html";
}

function storeIncome() {
    income = parseFloat(document.getElementById("income").value);
    localStorage.setItem("income", income);
}

function addExpense() {
    const expensesDiv = document.getElementById("expenses");
    const container = document.createElement("div");
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.placeholder = "Expense name:";
    const amountInput = document.createElement("input");
    amountInput.type = "number";
    amountInput.placeholder = "Amount";
    container.appendChild(nameInput);
    container.appendChild(amountInput);
    expensesDiv.appendChild(container);
}

function addBonus() {
    const bonusesDiv = document.getElementById("bonuses");
    const container = document.createElement("div");
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.placeholder = "Expense name:";
    const amountInput = document.createElement("input");
    amountInput.type = "number";
    amountInput.placeholder = "Amount";
    container.appendChild(nameInput);
    container.appendChild(amountInput);
    bonusesDiv.appendChild(container);
}

function calculation() {
    const expensesDiv = document.getElementById("expenses");
    const inputs = expensesDiv.querySelectorAll("input");
    let totalCost = 0;

    for (let i = 1; i < inputs.length; i += 2) {
    const amount = parseFloat(inputs[i].value);
    totalCost += amount;
  }
// get bonuses
    const bonusesDiv = document.getElementById("bonuses");
    const bonusInputs = bonusesDiv.querySelectorAll("input");
    let totalBonus = 0;

    for (let i = 1; i < bonusInputs.length; i += 2) {
        const amount = parseFloat(bonusInputs[i].value) || 0;
        totalBonus += amount;
    }


    const totalIncome = income + totalBonus;
    const remainder = totalIncome - totalCost;
    document.getElementById("result").textContent = "Remainder: " + remainder.toFixed(2);
}
