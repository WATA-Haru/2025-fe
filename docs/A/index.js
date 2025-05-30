const apiURL = "https://jsonplaceholder.typicode.com/users/1"

const getNameFromAPI = async () => {
  let res
  try {
    res = await fetch(apiURL)
  }
  catch(error) {
    console.error("fetch failed")
    return ;
  }

  const data = await res.json()
  return data.name
}

// break pointは下記asyncの行に張る必要がある
(async () => {
  const name = await getNameFromAPI();
  const usernameField = document.querySelector(".user-name");
  usernameField.textContent = name;
})();
