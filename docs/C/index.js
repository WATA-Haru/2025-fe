const apiURL = "https://jsonplaceholder.typicode.com/posts/1"
const loadButton = document.querySelector(".load-button");

const getTitleFromAPI = async () => {
  let res
  try {
    res = await fetch(apiURL)
  }
  catch(error) {
    console.error("fetch failed")
    return ;
  }

  const data = await res.json()
  return data.title
}

loadButton.addEventListener("click", () => {
  const title = getTitleFromAPI();
  const data = document.querySelector(".data").textContent = `API text is \"${title}\"`;
  data.textContent = title;
})