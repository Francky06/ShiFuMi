// MENU BURGER
var btn = document.getElementById("btnn");
const nav = document.querySelector("#nav");
btn.addEventListener("click", function () {
  nav.classList.toggle("active");
  btn.classList.toggle("active");
});

// TOAST
var btn2 = document.getElementById("bouton");
var toast = document.getElementById("toast");

btn2.addEventListener("click", function () {
  createNotif();
});

function createNotif() {
  const notif = document.createElement("div");
  notif.classList.add("notification");
  notif.innerText = "Hello";
  toast.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}

// TEXT

var texts =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam" +
  "eligendi rem nemo voluptate doloremque maxime molestiae, dolores" +
  "repellendus, voluptas consequuntur obcaecati nostrum autem? Ullam," +
  "molestias exercitationem beatae id rem aliquid!";

var contain = document.getElementById("box");
let index = 0;

function defil() {
  contain.innerText = texts.slice(0, index);
  index++;

  if (index > texts.length) {
    index = 0;
  }
}
setInterval(defil, 40);

// POP UP
const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.getElementById("container1");

open.addEventListener("click", function () {
  container.classList.add("active");
});

close.addEventListener("click", function () {
  container.classList.remove("active");
});

//RAIN

const rain = document.getElementById("rain");
const rain2 = document.getElementById("rain2");

function createHeart() {
  const heart = document.createElement("div");
  heart.innerHTML = "&#128156";
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";
  document.body.appendChild(heart);
  timer = setTimeout(() => {
    heart.remove();
  }, 2000);
}

rain.addEventListener("click", function () {
  timer2 = setInterval(createHeart, 300);
});

rain2.addEventListener("click", function () {
  clearTimeout(timer2);
});
