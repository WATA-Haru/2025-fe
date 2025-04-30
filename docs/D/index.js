const items = ["りんご", "バナナ", "ぶどう"];
document.getElementById("list").innerHTML = "";

items.filter(item => {
  const li = document.createElement("li");
  li.textContent = item;
  document.getElementById("list").appendChild(li);
});