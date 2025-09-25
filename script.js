// Reservation form validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("reservation-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const guests = document.getElementById("guests").value;

    if (!name || !email || !date || !time || !guests) {
      alert("Please fill out all fields.");
      return;
    }

    alert(`Thank you, ${name}! Your table for ${guests} on ${date} at ${time} has been booked.`);
    form.reset();
  });
});
