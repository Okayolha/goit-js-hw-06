function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const clrBtn = document.querySelector(".change-color");
const showClr = document.querySelector(".color");

clrBtn.addEventListener("click", () => {
  const getHex = getRandomHexColor();
  document.body.style.backgroundColor = getHex;

  showClr.textContent = getHex;
});
