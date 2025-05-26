document
  .getElementById("log-in-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const thankYouMessage = document.getElementById("thank-you-message");
    thankYouMessage.classList.remove("hidden");
    this.reset();

    setTimeout(function () {
      thankYouMessage.classList.add("hidden");
    }, 3000);
  });
