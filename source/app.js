let firstChose = document.getElementById('FirstChose');
let secondChose = document.getElementById('SecondChose');

let switchMode = document.getElementById('switchMode')
let switchBlock = document.querySelector(".swichColorBlock");

let theme = document.getElementById('theme');

switchMode.onclick = function () {
  switchBlock.style.opacity = "1";
  switchBlock.style.visibility = "visible";
}

firstChose.onclick = function () {
  theme.href = './css/style.css';
  switchBlock.style.opacity = "0";
  switchBlock.style.visibility = "hidden";
}

secondChose.onclick = function () {
  theme.href = './css/colorScheme.css';
  switchBlock.style.opacity = "0";
  switchBlock.style.visibility = "hidden";
}

document.querySelector(".hamburger").addEventListener("click", function () {
  document.querySelector(".header").classList.toggle("mobile");
  document.querySelector("body").classList.toggle("hidden");
});

let element = document.querySelector('.menu__wrapper')
let hide = document.getElementById('hideMain');
let hide_1 = document.getElementById('hideApp');
let hide_2 = document.getElementById('hideEdge');
let hide_3 = document.getElementById('hideGallery');

hide.onclick = function() {
  document.querySelector(".header").classList.toggle("mobile");
}

hide_1.onclick = function() {
  document.querySelector(".header").classList.toggle("mobile");

}

hide_2.onclick = function() {
  document.querySelector(".header").classList.toggle("mobile");

}

hide_3.onclick = function() {
  document.querySelector(".header").classList.toggle("mobile");

}
