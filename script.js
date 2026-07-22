// =========================
// Mobile Navigation
// =========================


const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");



if (menuToggle && navLinks) {


    menuToggle.addEventListener("click", () => {


        navLinks.classList.toggle("active");


    });


}







// =========================
// Menü schließen nach Klick
// =========================


const navItems = document.querySelectorAll(".nav-links a");


navItems.forEach(item => {


    item.addEventListener("click", () => {


        navLinks.classList.remove("active");


    });


});








// =========================
// Scroll Animation
// =========================


const sections = document.querySelectorAll("section");



const observer = new IntersectionObserver(


    entries => {


        entries.forEach(entry => {


            if (entry.isIntersecting) {


                entry.target.classList.add("show");


            }


        });


    },


    {

        threshold: 0.15

    }


);





sections.forEach(section => {


    section.classList.add("hidden");


    observer.observe(section);


});








// =========================
// Automatisches Jahr im Footer
// =========================


const footerYear = document.querySelector("footer p");



if (footerYear) {


    const year = new Date().getFullYear();


    footerYear.innerHTML =
    `© ${year} Abdul Ghani Alchaiteh`;


}