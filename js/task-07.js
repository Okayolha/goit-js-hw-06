const range = document.querySelector("#font-size-control");
const textSize = document.querySelector("#text");

range.addEventListener("input", () => {
  textSize.style.fontSize = Number(range.value) + "px";
});