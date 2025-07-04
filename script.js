document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    // Login Form
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let username = document.getElementById("username").value;
            let password = document.getElementById("password").value;
            let storedUser = localStorage.getItem(username);

            if (storedUser) {
                let userData = JSON.parse(storedUser);

                if (userData.password === password) {
                    alert("Login successful!");
                    localStorage.setItem("loggedInUser", username);
                    window.location.href = "main.html"; // Redirect to main page
                } else {
                    showErrorMessage("Incorrect password!");
                }
            } else {
                showErrorMessage("User not found! Please register.");
            }
        });
    }

    // Registration Form
    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let username = document.getElementById("username").value;
            let password = document.getElementById("password").value;

            if (localStorage.getItem(username)) {
                alert("User already exists! Try logging in.");
            } else {
                let userData = { password: password };
                localStorage.setItem(username, JSON.stringify(userData));
                alert("Registration successful! You can now log in.");
                window.location.href = "index.html";
            }
        });
    }

    // Logout
    window.logout = function () {
        localStorage.removeItem("loggedInUser");
        window.location.href = "index.html";
    };

    // Error message
    function showErrorMessage(message) {
        let errorMessage = document.getElementById("errorMessage");
        if (errorMessage) {
            errorMessage.innerText = message;
            errorMessage.style.color = "red";
        }
    }
});
