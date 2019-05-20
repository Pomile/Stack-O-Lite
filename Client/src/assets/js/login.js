const getSigninData = ()=>{
  event.preventDefault();
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  return { 
      email: email.value.trim(),
      password: password.value.trim()
  }
};
const signIn = () => {
    event.preventDefault();
    const loginDetails = getSigninData();
    const urlSignin = `https://stack-o-lite.herokuapp.com/api/v1/auth/Login`
    fetch(urlSignin, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(loginDetails),
    })
    .then(res => res.json ())
    .then((result) => {
    console.log(result)
    })
  }

  