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

        navToggle.addEventListener("click", function () {
            navbarNav.classList.add("show");
            navToggle.style.display = "none";
        });

        navClose.addEventListener("click", function () {
            navbarNav.classList.remove("show");
            navToggle.style.display = "block";
        });
    });