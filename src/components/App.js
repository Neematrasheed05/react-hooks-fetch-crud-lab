import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

 
  useEffect(()=> {
    fetch("http://localhost:4000/questions")
  
    .then(response => response.json())
  
    .then(questions => {setQuestions(questions)})
    
  }, []);
 
  function handleUpdateItem (updatedItem){
    const updatedItems = questions.map((question) => {
      if(question.id === updatedItem.id){
        return updatedItem
      }else{
        return question
      }
    })
    setQuestions(updatedItems)
    console.log("is correct!", )
  }
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm /> : null}
      <QuestionList questions={questions} setQuestions={setQuestions} onUpdate={handleUpdateItem}/>
    </main>
  );
}

export default App;