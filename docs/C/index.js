document.getElementById("load").addEventListener("click", () => {
  let result;
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(res => res.json())
    .then(data => {
      result = data.title;
    });

  document.getElementById("data").textContent = result; // ← ここが先に実行される
});