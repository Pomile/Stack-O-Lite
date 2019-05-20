const createUser = (user) => {
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