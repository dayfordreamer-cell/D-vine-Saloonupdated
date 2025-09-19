document.getElementById("bookingForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const formData = new FormData(this);
  const data = Object.fromEntries(formData.entries());

  const responseMessage = document.getElementById("responseMessage");

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbwSL-ppxMaFSjQr3qZZgL6LbN5IuhfjhFHYnRb4DvWWuNo613bUvPu_xQULeV75dZxV/exec", {
      method: "POST",
      body: new URLSearchParams(data),
    });

    if (response.ok) {
      responseMessage.textContent = "Booking successful! We'll contact you soon.";
      responseMessage.style.color = "green";
      this.reset();
    } else {
      responseMessage.textContent = "Failed to book. Try again!";
      responseMessage.style.color = "red";
    }
  } catch (error) {
    responseMessage.textContent = "Error submitting booking!";
    responseMessage.style.color = "red";
  }
});
