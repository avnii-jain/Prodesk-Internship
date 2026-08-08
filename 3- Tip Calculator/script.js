function calculateTip() {
  const bill = parseFloat(document.getElementById('bill').value);
  const tipPercent = parseFloat(document.getElementById('tip').value);

  if (isNaN(bill) || isNaN(tipPercent)) {
    document.getElementById('result').innerText = "Please enter valid numbers.";
    return;
  }

  const tip = bill * (tipPercent / 100);
  const total = bill + tip;

  document.getElementById('result').innerHTML = `
    Tip Amount: ₹${tip.toFixed(2)}<br>
    Total Amount: ₹${total.toFixed(2)}
  `;
}
