import React from "react";
import Task from "./Task"

function TaskList({Tasks, isValue}) {

  const newTaskList = Tasks.map((item) =>
  {
    if (isValue === "All")
    {
      return (
        <Task text={item.text} category={item.category} />
      )
    }
    else if (isValue === item.category)
    {
      return (
        <Task text={item.text} category={item.category} />
      )
    }
  })

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      <ul>
        {/* {Tasks.map((item) => (
            <Task text={item.text} category={item.category} />
          ))} */}
        {newTaskList}
      </ul>
    </div>
  );
}

export default TaskList;
