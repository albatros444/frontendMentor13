const errorStates = document.querySelectorAll(
  ".email__contr, .errorImg, .email__invalidMessage, .button"
);
console.log(errorStates);
const button = document.querySelector(".button");

button.addEventListener("click", () => {
  console.log("clicked");
  errorStates.forEach((element) => {
    element.classList.toggle("isInvalid");
  });
});
