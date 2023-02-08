const input = document.getElementById("validation-input");

input.addEventListener("blur", () => {
  console.log(input.value.length);
  console.log(Number(input.dataset.length));
  if (input.value.length === Number(input.dataset.length)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});