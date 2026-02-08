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
