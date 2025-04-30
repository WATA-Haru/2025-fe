const button = document.querySelector(".color-change-button")
const elements = document.querySelectorAll("bg-yellow")

button.addEventListener("click", () => {
  elements.forEach((element) => {
    element.classList.remove("bg-yellow")
    element.classList.add("red")
  })
})
