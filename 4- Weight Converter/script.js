var poundsInput = document.getElementById("poundsInput");
var resultBox = document.getElementById("result");
var timer;

poundsInput.addEventListener("input", function () {
  var pounds = poundsInput.value;
  var poundsNumber = parseFloat(pounds);

  if (!isNaN(poundsNumber)) {
    var kilograms = poundsNumber * 0.453592;
    var roundedKg = Math.round(kilograms * 100) / 100;
    resultBox.textContent = poundsNumber + " pounds = " + roundedKg + " kilograms";

    clearTimeout(timer);

    timer = setTimeout(function () {
      resultBox.textContent = "";
      poundsInput.value = "";
    }, 10000);
  } else {
    resultBox.textContent = "";
  }
});
