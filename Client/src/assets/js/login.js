const signIn = (loginDetails) => {
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