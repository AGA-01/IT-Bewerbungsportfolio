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
// Projektbilder Animation
// =========================


const images = document.querySelectorAll(".project img");


images.forEach(image => {


    image.style.opacity = "0";


    image.style.transition = "opacity 0.6s ease";


    image.addEventListener("load", () => {


        image.style.opacity = "1";


    });


    // Falls Bild bereits geladen wurde

    if(image.complete){


        image.style.opacity = "1";


    }


});








// =========================
// Smooth Scroll für interne Links
// =========================


const internalLinks = document.querySelectorAll('a[href^="#"]');


internalLinks.forEach(link => {


    link.addEventListener("click", function(e){


        const target = document.querySelector(
            this.getAttribute("href")
        );


        if(target){


            e.preventDefault();


            target.scrollIntoView({

                behavior:"smooth"

            });


        }


    });


});








// =========================
// Externe Links sicher öffnen
// =========================


const externalLinks = document.querySelectorAll(
    'a[target="_blank"]'
);


externalLinks.forEach(link => {


    link.setAttribute(
        "rel",
        "noopener noreferrer"
    );


});
