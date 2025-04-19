window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const top = window.scrollY;
    const offset = section.offsetTop - 150;
    const height = section.offsetHeight;
    if (top >= offset && top < offset + height) {
      current = section.getAttribute("id");
    }
  });

  dots.forEach((dot) => {
    dot.classList.remove("active");
    if (dot.dataset.section === current) {
      dot.classList.add("active");
    }
  });
});
