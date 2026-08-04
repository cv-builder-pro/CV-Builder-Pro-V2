/* ==========================================
   CV Builder Pro AI
   Main JavaScript
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       Sticky Header
    ========================= */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";
            header.style.background = "#ffffff";

        } else {

            header.style.boxShadow = "0 4px 20px rgba(0,0,0,.05)";
            header.style.background = "#ffffff";

        }

    });

    /* =========================
       Active Navigation
    ========================= */

    const navLinks = document.querySelectorAll(".nav a");

    navLinks.forEach(link => {

        if (link.href === window.location.href) {

            link.classList.add("active");

        }

    });

    /* =========================
       Smooth Scroll
    ========================= */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });

    /* =========================
       Fade Animation
    ========================= */

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.15

    });

    document.querySelectorAll(".feature-card,.hero-left,.hero-right").forEach(item => {

        item.classList.add("hidden");

        observer.observe(item);

    });

});


/* =========================
   Scroll To Top Button
========================= */

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.className = "scroll-top";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
