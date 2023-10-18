//UNTUK TEMA
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
// UNTUK NAVBAR
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
//UNTUK SLIDE BERITA
const tombol = document.querySelector(".btn1");
const tombol2 = document.querySelector(".btn2");
const article1 = document.querySelector(".artcl");
const article2 = document.querySelector(".artcl2");
tombol.addEventListener("click", function (e) {
  article1.style.display = "none";
  article2.style.display = "flex";
  tombol2.style.display = "flex";
  tombol.style.display = "none";
});
tombol2.addEventListener("click", function () {
  article1.style.display = "flex";
  article2.style.display = "none";
  tombol2.style.display = "none";
  tombol.style.display = "flex";
});
