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

   //NewTaskForm
   const [isDetails, setIsDetails] = useState("")
   const [isCategory, setIsCategory] = useState("Code")
   const [newTaskList, setNewTaskList] = useState(TASKS)

   function selectDetails(event)
   {
     setIsDetails(event.target.value)
   }

   function selectCategory(event)
   {
     setIsCategory(event.target.value)
   }

   function onTaskFormSubmit(event)
   {
     event.preventDefault()
     const taskObj = {text: isDetails, category: isCategory}
     setNewTaskList([...newTaskList, taskObj])
   }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter Categories={CATEGORIES} clickButton={clickButton} isValue={isValue}/>
      <NewTaskForm Categories={CATEGORIES} selectDetails={selectDetails} selectCategory={selectCategory} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList Tasks={newTaskList} isValue={isValue}/>
    </div>
  );
}

export default App;
