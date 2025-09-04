function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('active');
}

// Hide buttons depending on the current page
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop();

  const homeButton = document.querySelector(".nav-links li.home");
  if (currentPage === "index.html" || currentPage === "") {
    if (homeButton) homeButton.style.display = "none";
  }

  const pageMap = {
    "tableau.html": "tableau",
    "texte.html": "texte",
    "images.html": "images",
    "audio.html": "audio",
    "video.html": "video",
    "liens.html": "liens",
    "listes.html": "listes",
    "questionnaire.html": "questionnaire",
  };

  if (pageMap[currentPage]) {
    const btn = document.querySelector(`.nav-links li.${pageMap[currentPage]}`);
    if (btn) btn.style.display = "none";
  }
});
