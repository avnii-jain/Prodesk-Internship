const textInput = document.getElementById("textInput");
const totalCount = document.getElementById("totalCount");
const remainingCount = document.getElementById("remainingCount");

textInput.addEventListener("input", function () {
  const currentLength = textInput.value.length;
  totalCount.textContent = currentLength;
  remainingCount.textContent = 50 - currentLength;
});
