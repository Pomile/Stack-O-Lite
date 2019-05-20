const getSignUpData = ()=>{
  event.preventDefault();
  const firstName = document.getElementById("firstname").value.trim();
  const lastName = document.getElementById("lastname").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();
  return { 
      firstName,
      lastName,
      email,
      password,
      confirmPassword
  }
}
const createUser = async () => {
  event.preventDefault();
  const user = getSignUpData();
  console.log(user);
  const urlSignup = `https://stack-o-lite.herokuapp.com/api/v1/auth/signup`
    fetch(urlSignup, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user),
    })
    .then(res => res.json ())
    .then((result) => {
        console.log(result)
        })
  }


  