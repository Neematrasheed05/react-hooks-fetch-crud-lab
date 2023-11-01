import React from "react";


function QuestionList({questions}) {
  
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
    {questions && questions.map((question) => (
      <li key={question.id}>
        <div>Question: {question.prompt}</div>
        <div>
          Answers:
          <ul>
            {question.answers.map ((answer, index) => (
              <li key={index}>{answer}</li>
            ))}
          
          </ul>
        </div>
      </li>
    ))}
      
      </ul>
    </section>
  );
}

export default QuestionList;
