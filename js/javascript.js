document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".transparent-nav");

  if (!navbar) return;

  window.addEventListener("scroll", function () {
    if (window.scrollY > 80) {
      navbar.classList.add("nav-scrolled");
    } else {
      navbar.classList.remove("nav-scrolled");
    }
  });
});

const slides = document.querySelectorAll(".vb-testimonial-slide");
const dots = document.querySelectorAll(".dot");
const slider = document.querySelector(".vb-testimonial-slider");

let index = 0;

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    slider.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach((d) => d.classList.remove("active"));
    dot.classList.add("active");
  });
});

const btn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});

btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const elements = document.querySelectorAll(".vb-scroll");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("vb-show");
      }
    });
  },
  { threshold: 0.2 },
);

elements.forEach((el) => observer.observe(el));

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  item.querySelector(".faq-question").addEventListener("click", () => {
    faqItems.forEach((i) => {
      if (i !== item) {
        i.classList.remove("active");
        i.querySelector(".icon").textContent = "+";
      }
    });

    item.classList.toggle("active");
    const icon = item.querySelector(".icon");
    icon.textContent = item.classList.contains("active") ? "−" : "+";
  });
});

const form = document.querySelector(".application-form");
const modal = new bootstrap.Modal(document.getElementById("successModal"));

form.addEventListener("submit", function (e) {
  e.preventDefault();
  modal.show();
  form.reset();
});

const navbar = document.querySelector(".transparent-nav");

function handleNavbar() {
  if (window.scrollY === 0) {
    navbar.classList.remove("nav-scrolled");
  } else {
    navbar.classList.add("nav-scrolled");
  }
}

handleNavbar();

window.addEventListener("scroll", handleNavbar);
