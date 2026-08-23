/*hannburger menu*/

const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", function () {
    nav.classList.toggle("active");
    hamburger.classList.toggle("active");
});

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(function (link) {
      link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = link.getAttribute("href");
            const target = document.querySelector(targetId);

            target.scrollIntoView({
               behavior: "smooth"
            });
         
         nav.classList.remove("active");
         hamburger.classList.remove("active");
      });
});

// price Accordion
const priceTitles = document.querySelectorAll(".price-title");

priceTitles.forEach(function (title) {
      title.addEventListener("click", function () {
         const priceItem = title.parentElement;
         priceItem.classList.toggle("active");
      });
});