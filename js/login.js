let loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let enteredValue = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let users = JSON.parse(localStorage.getItem("users"));
    for(let usr in users) {
        let user = users[usr]
        if((user.email === enteredValue || user.username === enteredValue) && user.password === password) {
        
            document.getElementById("email").value = ""
            document.getElementById("password").value = ""
    
            alert("Log in successful!");

            localStorage.setItem("currentUser", user.username);
    
            window.location.href = "../index.html"
            
        } else {
            alert("Incorrect email or username or password. Please try again.");
        }
    } 
});
