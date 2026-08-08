function calculateBMI() {
  const height = parseFloat(document.getElementById('height').value) / 100;
  const weight = parseFloat(document.getElementById('weight').value);
  const resultDiv = document.getElementById('result');

  if (!height || !weight || height <= 0 || weight <= 0) {
    resultDiv.innerText = "⚠️ Please enter valid height and weight.";
    return;
  }

  const bmi = weight / (height * height);
  let category = "";

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi < 24.9) {
    category = "Normal weight";
  } else if (bmi < 29.9) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  resultDiv.innerHTML = `Your BMI is <strong>${bmi.toFixed(2)}</strong><br>Condition: <strong>${category}</strong>`;
}
