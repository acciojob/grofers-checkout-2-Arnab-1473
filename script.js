//your code here
let total = 0;
const prices = document.querySelectorAll('[data-ns-test="prices"]');
prices.forEach(price => {
  total += parseFloat(price.innerText);
});

// Add a new row at the bottom of the table with the total price
const table = document.querySelector('table');
const newRow = table.insertRow(-1);
const newCell = newRow.insertCell(0);
newCell.setAttribute('colspan', '2');
newCell.setAttribute('data-ns-test', 'grandTotal');
newCell.innerText = `Total: ${total}`;
