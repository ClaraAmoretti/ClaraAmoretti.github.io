// Image et lien de chaque projet : attributs data-img / href dans projets.html
document.addEventListener("DOMContentLoaded", () => {
  const projectImage = document.querySelector(".projectImage");
  let hovering = false;

  document.querySelectorAll(".linkContainer[data-img]").forEach(link => {
    link.addEventListener("mouseenter", () => {
      hovering = true;
      projectImage.src = link.dataset.img;
      projectImage.style.opacity = "1";
    });

    link.addEventListener("mouseleave", e => {
      hovering = false;
      if (e.relatedTarget && e.relatedTarget.closest(".linkContainer")) return;
      setTimeout(() => {
        if (!hovering) {
          projectImage.style.opacity = "0";
          projectImage.removeAttribute("src");
        }
      }, 100);
    });
  });
});
