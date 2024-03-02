/*document.querySelectorAll('a[href^="#"]').forEach(anchor =&gt; {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});*/

document.querySelector(".hamburger").addEventListener("click", function () {
  document.querySelector(".header").classList.toggle("mobile");
  document.querySelector("body").classList.toggle("hidden");
});
