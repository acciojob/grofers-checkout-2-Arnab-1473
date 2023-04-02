//your code here
let total = 0;
const price = document.querySelector('[data-ns-test="prices"]');
price.forEach(price =>{
    total += Number(price.textContent);
});
const table = document.querySelector('table');
const row = table.insertRow();
const cell = row.insertCell();
cell.colSpan = 2;
cell.textContent = `Total: ${total}`;
cell.setAttribute('data-ns-test', 'grandTotal');
