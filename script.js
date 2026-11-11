
// Get HTML Elements
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");


// Mobile Menu
menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuBtn.setAttribute("aria-expanded", isOpen);

    menuBtn.textContent = isOpen ? "✕" : "☰";

});


// Close Menu After Clicking a Link
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuBtn.textContent = "☰";

        menuBtn.setAttribute("aria-expanded", "false");

    });

});


// Contact Form
contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    formMessage.textContent =
        "Thank you, " + name + "! Your message is ready.";

    contactForm.reset();

});
