const getQuestions = async () => {
    const url = 'https://stack-o-lite.herokuapp.com/api/v1/questions';
    const getAllQuestions = await fetch(url);
    const result = await getAllQuestions.json();
    const questions = await result.data.questions;
    await localStorage.setItem('questions', questions);
    await questions.map(eachQuestion => {
    
      const {questionTitle, questionDescription, answers} = eachQuestion;
      const li = document.createElement('li');
      li.innerHTML= JSON.stringify(eachQuestion);
      document.querySelector('.get-all-questions').appendChild(li);
    });
    
    }
document.onreadystatechange = () => {
  if (document.readyState = 'complete'){
  getQuestions();
  }
}