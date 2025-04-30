const calcButton = document.querySelector("calc-button")

calcButton.addEventListener("click", () => {
  const base = document.querySelector("price-input").value;
  const total = base * 1.1;
  document.querySelector("result").textContent = `税込み: ${total}円`;
});
