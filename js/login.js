let loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let enteredValue = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let foundUser = users.find(user => (user.username === enteredValue || 
        user.email === enteredValue)  && user.password === password)

    if(foundUser) {
        
        localStorage.setItem("currentUser", foundUser.username);
        alert('Login Successful!')
        window.location.href = "../index.html";
    } else {
        alert("Invalid username or password");
    }
})
