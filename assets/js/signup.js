document
  .getElementById("sign-up-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the date of birth input value
    const dob = document.getElementById("dob").value;
    const today = new Date();
    const birthDate = new Date(dob);
    const age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (age < 18 || (age === 18 && m < 0)) {
      alert("You must be 18 years or older to register.");
      return;
    }

    // Show thank you message
    const thankYouMessage = document.getElementById("thank-you-message");
    thankYouMessage.classList.remove("hidden");

    setTimeout(function () {
      thankYouMessage.classList.add("hidden");
    }, 3000);

    // Reset form after submission
    this.reset();
  });
