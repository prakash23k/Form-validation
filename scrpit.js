document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let valid = true;

    let Name= document.getElementById("Name").value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    
    
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById('emailError');
    let passwordError = document.getElementById('passwordError');
    let confirmPasswordError = document.getElementById('confirmPasswordError');
    
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";
    
    if (Name === "") {
        nameError.textContent = "Name is required";
         valid = false;
    }

    if (!email.includes('@')) {
        emailError.textContent = "Invalid email format";
        valid = false;
    }
    
    if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters long";
        valid = false;
    }
    
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match";
        valid = false;
    }
    
    if (valid) {
        alert("Form submitted successfully!");
    }
});