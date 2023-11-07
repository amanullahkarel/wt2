document.addEventListener("DOMContentLoaded", function() {
    const registrationForm = document.getElementById("registrationForm");

    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Create a user object
        const user = {
            username: username,
            email: email,
            password: password
        };

        // Simulate an AJAX POST request (you can replace this with a real API endpoint)
        // In practice, you would send this data to a server.
        // For this example, we'll use local storage to store the user data.

        // Check if local storage already has a user array
        let users = JSON.parse(localStorage.getItem("users")) || [];

        // Push the new user data to the array
        users.push(user);

        // Store the updated array back in local storage
        localStorage.setItem("users", JSON.stringify(users));

        // Redirect to the data list page
        window.location.href = "datalist.html";
    });
});