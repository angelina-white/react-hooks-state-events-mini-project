import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";
import {useState} from "react";

function App() {

  //CategoryFilter
  const [isValue, setIsValue] = useState("All")

  function clickButton(event)
   {
     setIsValue(event.target.value)
   }
 
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter Categories={CATEGORIES} clickButton={clickButton} isValue={isValue}/>
      <NewTaskForm />
      <TaskList Tasks={TASKS} isValue={isValue}/>
    </div>
  );
}

export default App;
