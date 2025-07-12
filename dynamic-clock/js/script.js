let theme = document.documentElement;
console.log(theme);
let btns = document.querySelectorAll(".btn");
console.log(btns);

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let btnClass = e.currentTarget.classList;
    if (btnClass.contains("btn1")) {
      theme.style.setProperty("--theme-color", "brown");
    } else if (btnClass.contains("btn2")) {
      theme.style.setProperty("--theme-color", "red");
    } else if (btnClass.contains("btn3")) {
      theme.style.setProperty("--theme-color", "burlywood");
    } else {
      theme.style.setProperty("--theme-color", "purple");
    }
  });
});
