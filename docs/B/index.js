document.getElementById("calc").addEventListener("click", () => {
  const base = document.getElementById("price").value;
  const total = base * 1.1;
  document.getElementById("result").textContent = `税込み: ${total}円`;
});