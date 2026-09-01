// Header
fetch("/1_PJF/components/header.html")
.then(response => response.text())
.then(data => {
    document.getElementById("header").innerHTML = data;

    setupHamburger();
});


// Footer
fetch("/1_PJF/components/footer.html")
.then(response => response.text())
.then(data => {
    document.getElementById("footer").innerHTML = data;
});

/*hamburger menu*/

function setupHamburger() {

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

                  if(targetId.startsWith("/#")){
                        const currentPage =  location.pathname;
                        if(currentPage !== "/" || currentPage !== "/index.html"){
                              const id = targetId.replace("/", "");
                              const target = document.querySelector(id);
                              target.scrollIntoView({ behavior: "smooth" });
                        } else {
                              window.location.href = targetId;
                        }
                        
                        
            nav.classList.remove("active");
            hamburger.classList.remove("active");
                  };
            });
      });
}

// price Accordion
const accordionTitles = document.querySelectorAll(".accordion-title");

accordionTitles.forEach(function (title) {
      title.addEventListener("click", function () {
         const accordionItem = title.parentElement;
         accordionItem.classList.toggle("active");
      });
});

// works modal
const worksButtons = document.querySelectorAll(".works-button");
const modal = document.getElementById("modal");
const modalVideo = document.getElementById("modalVideo");
const modalClose = document.getElementById("modalClose");

worksButtons.forEach(function (button) {
      button.addEventListener("click", function () {
         const videoUrl = button.dataset.video;
         const videoId = videoUrl.split("youtu.be/")[1].split("?")[0];
         const embedUrl = `https://www.youtube.com/embed/${videoId}`;
         modalVideo.src = embedUrl;

         const title = button.dataset.title;
         const artist = button.dataset.artist;
         const type = button.dataset.type;
         const concept = button.dataset.concept;

         document.getElementById("modalTitle").textContent = title;
         document.getElementById("modalArtist").textContent = artist;
         document.getElementById("modalType").textContent = type;
         document.getElementById("modalConcept").textContent = concept;
         
         modal.classList.add("active");
      });
});

modalClose.addEventListener("click", function () {
      modal.classList.remove("active");
      modalVideo.src = "";
});

modal.addEventListener("click", function (e) {
      if (e.target === modal) {
         modal.classList.remove("active");
         modalVideo.src = "";
      }
});