document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("age-popup");
  const yesBtn = document.getElementById("age-yes");
  const noBtn = document.getElementById("age-no");
  const mainContent = document.getElementById("main-content");

  yesBtn.addEventListener("click", function () {
    popup.classList.add("hidden");
    mainContent.style.display = "block"; // Show the main content
  });

  noBtn.addEventListener("click", function () {
    window.location.href = "https://www.google.com/";
  });
});
