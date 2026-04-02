// ================= LOAD COMPONENTS =================
async function loadComponent(id, file) {
    const res = await fetch(file);
    const data = await res.text();
    document.getElementById(id).innerHTML = data;
}

// Load Navbar + attach events AFTER load
loadComponent("navbar", "/components/navbar.html").then(() => {

    const links = document.querySelectorAll(".nav-link");

    links.forEach(link => {
        link.addEventListener("click", function () {
            links.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });

});

// Load Footer
loadComponent("footer", "/components/footer.html");


// ================= NAVBAR SCROLL =================
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".custom-navbar");
    if (!navbar) return;

    navbar.style.boxShadow =
        window.scrollY > 50
            ? "0 5px 25px rgba(0,0,0,0.1)"
            : "0 2px 20px rgba(0,0,0,0.05)";
});


// ================= TAXI FILTER =================
const tabs = document.querySelectorAll(".tab");
const items = document.querySelectorAll(".taxi-item");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {

        tabs.forEach(btn => btn.classList.remove("active"));
        tab.classList.add("active");

        const filter = tab.getAttribute("data-filter");

        items.forEach(item => {
            if (item.getAttribute("data-category") === filter) {
                item.classList.remove("d-none");
            } else {
                item.classList.add("d-none");
            }
        });

    });
});

// default select first tab
if (tabs.length) tabs[0].click();


// ================= SERVICES SWIPER =================
new Swiper(".mySwiper", {
    loop: true,
    speed: 3000,
    grabCursor: true,

    autoplay: {
        delay: 1,
        disableOnInteraction: false,
    },

    freeMode: true,
    freeModeMomentum: false,

    breakpoints: {
        0: { slidesPerView: 1.5, spaceBetween: 15 },
        576: { slidesPerView: 2.5, spaceBetween: 20 },
        768: { slidesPerView: 3.5, spaceBetween: 20 },
        992: { slidesPerView: 4.5, spaceBetween: 25 },
        1200: { slidesPerView: 5.5, spaceBetween: 25 }
    }
});


// ================= PACKAGES SWIPER =================

// ROW 1
new Swiper(".packageSwiper1", {
  loop: true,
  speed: 4000,
  spaceBetween: 20,
  grabCursor: true,

  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },

  slidesPerView: "auto",

  breakpoints: {
    0: { slidesPerView: 1.2 },
    576: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    992: { slidesPerView: 3 },
    1200: { slidesPerView: 4 }
  }
});

// ROW 2 (REVERSE)
new Swiper(".packageSwiper2", {
  loop: true,
  speed: 4000,
  spaceBetween: 20,
  grabCursor: true,

  autoplay: {
    delay: 0,
    reverseDirection: true,
    disableOnInteraction: false,
  },

  slidesPerView: "auto",

  breakpoints: {
    0: { slidesPerView: 1.2 },
    576: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    992: { slidesPerView: 3 },
    1200: { slidesPerView: 4 }
  }
});

// ================= TESTIMONIAL SWIPER =================
new Swiper(".testimonialSwiper", {
    loop: true,
    speed: 800,
    spaceBetween: 20,
    grabCursor: true,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    slidesPerView: 1
});


// ================= COUNTER FIX =================
// Only run if jQuery exists
if (window.jQuery && $('.counterUp').length) {
    $('.counterUp').counterUp({
        delay: 10,
        time: 1000
    });
}


// ================= SCROLL TO TOP =================
const scrollBtn = document.getElementById("scrollTopBtn");

// SHOW BUTTON ON SCROLL
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }
});

// CLICK TO TOP
scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".custom-navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});