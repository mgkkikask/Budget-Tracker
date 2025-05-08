// Stores the income in local storage
function storeIncome() {
    const income = parseFloat(document.getElementById("income")?.value || 0);
    localStorage.setItem("income", income);
  }

  // Adds a new expense row if the user clicks the "Add Expense" button
  function addExpense() {
    const expensesDiv = document.getElementById("expenses");
    const container = document.createElement("div");


    const nameInput = document.createElement("input");
    nameInput.type = "text";
    
    // Placeholder text for the expense name input field
    nameInput.placeholder = "Expense name:";
    nameInput.className = "input-box";


    const amountInput = document.createElement("input");
    amountInput.type = "number";
    
    // Placeholder text for the expense amount input field
    amountInput.placeholder = "Amount";
    amountInput.className = "input-box";

    //Add the container to the expenses section
    container.appendChild(nameInput);
    container.appendChild(amountInput);

    //  Adds a new bonus row to the expenses section
    expensesDiv.appendChild(container);
  }
  
  // Adds a new bonus row if the user clicks the "Add Bonus" button
  function addBonus() {
    const bonusesDiv = document.getElementById("bonuses");
    const container = document.createElement("div");
    const nameInput = document.createElement("input");

    nameInput.type = "text";

    // Placeholder text for the bonus name input field
    nameInput.placeholder = "Bonus name:";
    nameInput.className = "input-box";

    const amountInput = document.createElement("input");
    amountInput.type = "number";

    // Placeholder text for the bonus amount input field
    amountInput.placeholder = "Amount";
    amountInput.className = "input-box";

    //Add both inputs to the container
    container.appendChild(nameInput);
    container.appendChild(amountInput);

    //Add the container to the bonuses section
    bonusesDiv.appendChild(container);
  }
  
  //Collects and stores the expenses and bonuses, then redirects to the results page
  function goToResultsPage() {
    const expenses = [];
    const inputs = document.getElementById("expenses").querySelectorAll("input");

    //Group every 2 inputs into an expense object
    //The first input is the name and the second is the amount
    for (let i = 0; i < inputs.length; i += 2) {
      expenses.push({
        name: inputs[i].value,
        amount: parseFloat(inputs[i + 1].value) || 0
      });
    }
    
    // save the expenses to local storage
    localStorage.setItem("expenses", JSON.stringify(expenses));
  
    const bonuses = [];
    const bonusInputs = document.getElementById("bonuses").querySelectorAll("input");

    //Group every 2 inputs into a bonus object
    //The first input is the name and the second is the amount
    for (let i = 0; i < bonusInputs.length; i += 2) {
      bonuses.push({
        name: bonusInputs[i].value,
        amount: parseFloat(bonusInputs[i + 1].value) || 0
      });
    }
    // save the bonuses to local storage
    localStorage.setItem("bonuses", JSON.stringify(bonuses));
  
    // Redirect to the results page
    window.location.href = "results.html";
  }
  
  // Displays the stored income, expenses, and bonuses on the results page
  function calculation() {
    const income = parseFloat(localStorage.getItem("income")) || 0;
    const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    const bonuses = JSON.parse(localStorage.getItem("bonuses")) || [];
  
    let totalCost = 0;
    let totalBonus = 0;
    // Sum up all expenses and bonuses
    expenses.forEach(exp => totalCost += exp.amount);
    bonuses.forEach(bonus => totalBonus += bonus.amount);
  
    // Calculate the total income, remainder, and bills total amount
    const totalIncome = income + totalBonus;
    const remainder = totalIncome - totalCost;
  
    // Display the results in the reults page
    const resultEl = document.getElementById("result");
    const billsEl = document.getElementById("bills");
  
    if (resultEl) {
      resultEl.textContent = "Remainder: $" + remainder.toFixed(2);
    }
  
    if (billsEl) {
      billsEl.textContent = "Bills total amount: $" + totalCost.toFixed(2);
    }
  }
  
