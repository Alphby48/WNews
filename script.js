const swTheme = document.getElementById("switch");
const font = document.querySelectorAll(".fm");
function theme(e) {
  if (e.target.checked) {
    for (let i = 0; i < font.length; i++) {
      font[i].style.color = "white";
    }
    document.body.style.backgroundColor = "#161625";
  } else {
    for (let i = 0; i < font.length; i++) {
      font[i].style.color = "black";
    }
    document.body.style.backgroundColor = "white";
  }
}
swTheme.addEventListener("change", theme, false);

const toggle = document.querySelector("#checkbox");
const navbox = document.querySelector("nav ul");
toggle.addEventListener("click", function (e) {
  navbox.classList.toggle("slider");
});
const toggleBar = document.querySelector(".toggle-bar");
const toggelClick = document.querySelector(".tgl-clk");
document.addEventListener("click", function (e) {
  if (!toggelClick.contains(e.target) && !navbox.contains(e.target)) {
    navbox.classList.remove("slider");
    toggle.checked = false;
  }
});
