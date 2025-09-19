document.getElementById("bookingForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const formData = new FormData(this);
  const data = Object.fromEntries(formData.entries());

  const responseMessage = document.getElementById("responseMessage");

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbzpcNCvhCgJkAq7rcY7LyPDCnQ-iGwHBRGpsDJiUBy0CZrt2Ut6x6sEalDu552PQJla/exec", {
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