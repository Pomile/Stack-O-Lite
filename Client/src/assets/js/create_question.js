const createQuestion = (sampleQuestion, token) => {
    const url2 = `https://stack-o-lite.herokuapp.com/api/v1/questions?token=${token}`;
    const askQuestions = 
    fetch(url2, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(sampleQuestion),
    })
    .then(res => res.json ())
    .then((result) => {
        console.log(result)
        // const questions = result.data.questions
        })
    .catch(error => console.log (error));
  }