document.getElementById("load").addEventListener("click", () => {
  let result;
  
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(res => res.json())
    .then(data => {
      result = data.title;
    });

  document.querySelector("data").textContent = result;
});
