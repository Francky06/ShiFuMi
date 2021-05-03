var btn = document.getElementById("btnn");
const nav = document.querySelector("#nav");

btn.addEventListener("click", function () {
  nav.classList.toggle("active");
  btn.classList.toggle("active");
});
