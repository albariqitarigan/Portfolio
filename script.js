document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const targetId = link.getAttribute("href");
    const target = document.querySelector(targetId);

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 10) {
    nav.style.boxShadow = "0 4px 15px rgba(0,0,0,0.15)";
  } else {
    nav.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
  }
});

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// --- PROJECT SLIDER LOGIC ---
let slideIndex = 1;
showSlides(slideIndex);

// Fungsi untuk tombol Next/Prev
function changeSlide(n) {
  showSlides(slideIndex += n);
}

// Fungsi utama untuk menampilkan slide
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  
  // Jika melewati batas akhir, kembali ke awal
  if (n > slides.length) { slideIndex = 1 }
  // Jika mundur sebelum awal, pergi ke paling akhir
  if (n < 1) { slideIndex = slides.length }
  
  // Sembunyikan semua slide
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  
  // Tampilkan slide yang sesuai
  slides[slideIndex - 1].classList.add("active");
}