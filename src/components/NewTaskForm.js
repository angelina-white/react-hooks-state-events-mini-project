import React from "react";

function NewTaskForm({Categories, selectDetails, selectCategory, onTaskFormSubmit}) {

  const newCategories = [...Categories]
  newCategories.shift()
  

  return (
    <form className="new-task-form" >
      <label>
        Details
        <input type="text" name="text" onChange={selectDetails} />
      </label>
      <label>
        Category
        <select name="category" onChange={selectCategory}>
          {/* render <option> elements for each category here */}
          {newCategories.map((item) =>
          {
            return (
              <option value={item}>{item}</option>
            )
          })}
        </select>
      </label>
      <input type="submit" value="Add task" onClick={onTaskFormSubmit}/>
    </form>
  );
}

export default NewTaskForm;
