import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then((res) => res.json() )
    .then ((data) => {setQuestions(data)});
   
  }, []);
  return (
<main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm /> : null} {/* Render QuestionForm conditionally */}
      {questions.length > 0 ? <QuestionList questions={questions} /> : null} {/* Render QuestionList conditionally */}
    </main>
  );/*{page === "Form" ? <QuestionForm /> : <QuestionList />}*/}
   
    


export default App;
