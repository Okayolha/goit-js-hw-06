function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const input = document.querySelector("input");

const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", () => {
  const boxet = input.value;
  for (let i = 1; i <= boxet; i += 1) {
    const element = document.createElement("div");
    element.style.backgroundColor = getRandomHexColor();

    element.style.width = i * 10 + 20 + "px";
    element.style.height = i * 10 + 20 + "px";

    boxes.insertAdjacentElement("beforeend", element);
    destroyBtn.addEventListener("click", () => {
      element.remove();
    });
  }
});