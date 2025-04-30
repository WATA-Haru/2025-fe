fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(res => res.json())
  .then(data => {
    const el = document.getElementById("user-info"); 
    el.textContent = `名前: ${data.name}`;
  })
  .catch(err => console.error(err));