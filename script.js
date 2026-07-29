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
// Menü schließen nach Auswahl
// =========================


const navItems = document.querySelectorAll(".nav-links a");



navItems.forEach(link => {


    link.addEventListener("click", () => {


        if(navLinks){

            navLinks.classList.remove("active");

        }


    });


});









// =========================
// Scroll Animation
// =========================


const sections = document.querySelectorAll("section");



const observer = new IntersectionObserver(


    entries => {


        entries.forEach(entry => {


            if(entry.isIntersecting){


                entry.target.classList.add("show");


            }


        });


    },


    {


        threshold:0.15


    }


);





sections.forEach(section => {


    section.classList.add("hidden");


    observer.observe(section);


});









// =========================
// Automatisches Jahr Footer
// =========================


const footerText = document.querySelector("footer p");



if(footerText){


    const currentYear = new Date().getFullYear();



    footerText.textContent =

    `© ${currentYear} Abdul Ghani Alchaiteh`;


}









// =========================
// Bilder Animation beim Laden
// =========================


const projectImages = document.querySelectorAll(".project img");



projectImages.forEach(image => {


    image.addEventListener("load", () => {


        image.style.opacity = "1";


    });


});
