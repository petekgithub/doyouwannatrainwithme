document.addEventListener("DOMContentLoaded", function () {
  // Event listener for the back button
  const backBtn = document.getElementById("backBtn");
  backBtn.addEventListener("click", (event) => {
    // Navigate to the index.html page
    event.preventDefault();
    window.location.href = "/index.html";
  });
});
