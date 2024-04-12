// JavaScript for handling form submission and validation
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent form submission

    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;

    // Simple validation
    if (username === "" || password === "") {
      document.getElementById("loginError").innerText = "Please enter username and password.";
      return;
    }

    // Here you can add code to validate the credentials (e.g., make an AJAX request to a server)

    // For demonstration purposes, just display a success message
    alert("Login successful!");
  });

  document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent form submission

    var username = document.getElementById("signupUsername").value;
    var password = document.getElementById("signupPassword").value;

    // Simple validation
    if (username === "" || password === "") {
      document.getElementById("signupError").innerText = "Please enter username and password.";
      return;
    }

    // Here you can add code to handle the sign-up process (e.g., make an AJAX request to a server)

    // For demonstration purposes, just display a success message
    alert("Sign up successful!");
  });
  // JavaScript code to handle additional responsiveness

// Function to adjust layout based on screen size
function adjustLayout() {
  const screenWidth = window.innerWidth;
  // You can add JavaScript logic here to adjust layout dynamically based on screen size
  if (screenWidth < 600) {
      // Adjust layout for smaller devices
  } else if (screenWidth >= 601 && screenWidth <= 1024) {
      // Adjust layout for medium-sized devices
  } else {
      // Default layout for larger devices
  }
}

// Event listener to adjust layout when the window is resized
window.addEventListener('resize', adjustLayout);

// Call adjustLayout initially to ensure proper layout on page load
adjustLayout();
