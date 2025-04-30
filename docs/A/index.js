fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(res => res.json())
  .then(data => {
    const el = document.getElementById("user-name"); 
    el.textContent = `${data.name}`;
  })
  .catch(err => console.error(err));