import React from "react";


function QuestionList({ questions , setQuestions , onUpdate}) {
  function handleDeleteClick(question) {
    // Extract the question's ID
    const questionId = question.id;

    fetch(`http://localhost:4000/questions/${questionId}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        console.log("Deleted question with ID:", questionId);

        // After successful deletion from the server, remove the question from the state
        const updatedQuestions = questions.filter((q) => q.id !== questionId);
        // Update the state with the new questions array
        setQuestions(updatedQuestions);
      })
      .catch((error) => {
        console.error("Error deleting question:", error);
      });
  }
  function handleUpdateClick(question, newCorrectIndex) {
    // Extract the question's ID
    const questionId = question.id;
  
    fetch(`http://localhost:4000/questions/${questionId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        correctIndex: newCorrectIndex, // Use the newCorrectIndex you want to update
      }),
    })
      .then((r) => r.json())
      .then((updatedItem) => {
        const isCorrect = newCorrectIndex === question.correctIndex;
        onUpdate(updatedItem);
        if (isCorrect) {
          // Show a success message or use another approach like displaying a notification.
          alert("Correct Answer Chosen!");
        } else {
          alert("Incorrect Answer Chosen");
        }
  
        console.log("Updated question with ID:", questionId);
        console.log("Updated question with ID:", questionId);
      })
      .catch((error) => {
        console.error("Error updating question:", error);
      });
  }
  
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions &&
          questions.map((question) => (
            <li key={question.id}>
              <div>Question: {question.prompt}</div>
              <div>
                Answers:
                <ul>
                {question.answers.map((answer, answerIndex) => (
                    <li key={answerIndex}>
                      {answer}
                       <button onClick={() => handleUpdateClick(question, answerIndex)}> Choose</button>
                    </li>
                ))}
                </ul>
              </div>
              <button className="remove" onClick={() => handleDeleteClick(question)}>
                Delete
              </button>
            </li>
          ))}
      </ul>
    </section>
  );
}

export default QuestionList;
