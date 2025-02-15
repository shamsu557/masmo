let images = document.querySelectorAll('.hero img');
let index = 0;

function changeImage() {
    images[index].classList.remove('active');
    index = (index + 1) % images.length;
    images[index].classList.add('active');
}

setInterval(changeImage, 5000);

document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.getElementById("navToggle");
    const navClose = document.getElementById("navClose");
    const navbarNav = document.getElementById("navbarNav");
    const navLinks = document.querySelectorAll("#navbarNav a"); // Select all navbar items

    navToggle.addEventListener("click", function () {
        navbarNav.classList.add("show");
        navToggle.style.display = "none";
    });

    navClose.addEventListener("click", function () {
        navbarNav.classList.remove("show");
        navToggle.style.display = "block";
    });

    // Collapse navbar when a nav item is clicked
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navbarNav.classList.remove("show");
            navToggle.style.display = "block";
        });
    });
});

// Back to top button functionality
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
