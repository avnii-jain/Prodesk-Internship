const imageContainer = document.getElementById("image-container");
const addButton = document.getElementById("add-btn");

function getRandomImageUrl() {
  const randomId = Math.floor(Math.random() * 1000);
  return `https://picsum.photos/300/200?random=${randomId}`;
}

function addImage() {
  const img = document.createElement("img");
  img.src = getRandomImageUrl();
  imageContainer.appendChild(img);
}

for (let i = 0; i < 6; i++) {
  addImage();
}

addButton.addEventListener("click", addImage);
