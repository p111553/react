const name = document.querySelector("#myName");
const button = document.querySelector("#changeName");

button.addEventListener("click", () => {
  name.innerText = "mike hung";
});
