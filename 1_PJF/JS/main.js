/*hamburger menu*/

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

const worksButtons = document.querySelectorAll(".works-button");
const worksModal = document.getElementById("works-Modal");
const worksVideo = document.getElementById("works-Video");
const worksClose = document.getElementById("works-close");

worksButtons.forEach(function (button) {
      button.addEventListener("click", function () {
         const videoUrl = button.dataset.video;
         const videoId = videoUrl.split("youtu.be/")[1].split("?")[0];
         const embedUrl = `https://www.youtube.com/embed/${videoId}`;
         worksVideo.src = embedUrl;
         worksModal.classList.add("active");
      });
});

worksClose.addEventListener("click", function () {
      worksModal.classList.remove("active");
      worksVideo.src = "";
});

worksModal.addEventListener("click", function (e) {
      if (e.target === worksModal) {
         worksModal.classList.remove("active");
         worksVideo.src = "";
      }
});