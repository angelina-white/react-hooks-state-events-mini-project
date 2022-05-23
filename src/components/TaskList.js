import React from "react";
import Task from "./Task"
import {useState} from "react"

function TaskList({Tasks, isValue}) {

  const [taskArr, setTaskArr] = useState(Tasks)

  function deleteTask(event)
  {
    const newest = taskArr.filter((item) =>
    {
      if (item.text === event.target.value)
      {
        return null
      }
      else{
        return item
      }
    })
    setTaskArr(newest)
  }
  console.log(taskArr)


  const newTaskList = taskArr.map((item) =>
  {
    if (isValue === "All")
    {
      return (
        <Task text={item.text} category={item.category} deleteTask={deleteTask}/>
      )
    }
    else if (isValue === item.category)
    {
      return (
        <Task text={item.text} category={item.category} deleteTask={deleteTask}/>
      )
    }
  })

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      <ul>
        {newTaskList}
      </ul>
    </div>
  );
}

export default TaskList;
