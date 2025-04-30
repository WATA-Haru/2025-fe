document.getElementById("calc").addEventListener("click", () => {
  const base = document.querySelector("price").value;
  const total = base * 1.1;
  document.querySelector("result").textContent = `税込み: ${total}円`;
});