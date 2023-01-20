let loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let enteredValue = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let user = JSON.parse(localStorage.getItem("user"));
    if((user.email === enteredValue || user.username === enteredValue) && user.password === password) {
        
        document.getElementById("email").value = ""
        document.getElementById("password").value = ""

        alert("Log in successful!");

        window.location.href = "../index.html"
        
    } else {
        alert("Incorrect email or username or password. Please try again.");
    }
});
