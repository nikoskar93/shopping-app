let signupForm = document.getElementById("signup-form");

signupForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let passwordConfirm = document.getElementById("password-confirm").value;
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let existingUser = null;

    for (var i = 0; i < users.length; i++) {
        if(users[i].username === username || users[i].email === email) {
            existingUser = users[i];
            break;
        }
    }

    if(existingUser) {
        alert('username or email already exists, please choose another one');
    } else if(validateEmail(email) && passwordsMatch(password, passwordConfirm)) {
        
        let user = {
            username: username,
            email: email,
            password: password
        };
        
        users.push(user);
        
        localStorage.setItem("users", JSON.stringify(users));
        
        document.getElementById("username").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("password-confirm").value = "";

        localStorage.setItem("currentUser", username);
        
        alert('Sign up successful!')
        window.location.href = "../index.html"
    }else {
        alert("Passwords don't match!")
    }
});


function validateEmail(email) {
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(String(email).toLowerCase());
}

function passwordsMatch(password, passwordConfirm) {
    return password === passwordConfirm;
}

function showPassword(inputId) {
    let input = document.getElementById(inputId);
    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}
