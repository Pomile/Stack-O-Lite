const getSignUpData = ()=>{
    event.preventDefault();
    const firstname = document.getElementById("firstname");
    const lastname = document.getElementById("lastname");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    return { 
        firstname: firstname.value.trim(),
        lastname: lastname.value.trim(),
        email: email.value.trim(),
        password: password.value.trim(),
        confrimPassword: confirmPassword.value.trim()
    }
}