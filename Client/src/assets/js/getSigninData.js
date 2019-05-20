const getSigninData = ()=>{
    event.preventDefault();
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    return { 
        email: email.value.trim(),
        password: password.value.trim()
    }
}