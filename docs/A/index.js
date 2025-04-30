// after
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

(async () => {
  const name = await getNameFromAPI();
  const el = document.querySelector("user-name");
  el.textContent = name;
})();