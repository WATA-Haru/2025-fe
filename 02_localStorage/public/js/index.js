const themes = {
  light: "-light",
  dark: "-dark",
};

// localStorageの情報を使ってテーマの値を初期化
const themeStorage = localStorage.getItem("theme");
if (themeStorage) {
  document.body.classList.add(themeStorage);
} else {
  document.body.classList.add("-light");
}

// テーマの切り替えをし、localStorageに保存
const themeButton = document.getElementById("theme-button");
themeButton.addEventListener("click", () => {
  const currentTheme = document.body.classList.contains(themes.dark)
    ? themes.dark
    : themes.light;
  const newTheme = currentTheme === themes.dark ? themes.light : themes.dark;

  document.body.classList.remove(currentTheme);
  document.body.classList.add(newTheme);
  localStorage.setItem("theme", newTheme);
});
