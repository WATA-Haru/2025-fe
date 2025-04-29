const inputElement = document.querySelector('input[name="text"]');

// sessionStorageに保存された値を取得してinputにセット
inputElement.value = sessionStorage.getItem("text") || "";

// inputの値が変更されたらsessionStorageに保存
inputElement.addEventListener("input", (e) => {
  sessionStorage.setItem("text", e.target.value);
});
