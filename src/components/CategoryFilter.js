import React from "react";

function CategoryFilter({Categories, clickButton, isValue}) {
     //iterates through array to determine which one has select class 
     const newCategories = Categories.map((item) =>
     {
       if (item === isValue)
       {
         return (
           <button value={item} key={item} className="selected" onClick={clickButton}>{item}</button>
         )
       }
       else
       {
         return (
           <button value={item} key={item} className="" onClick={clickButton}>{item}</button>
         )
       }
     })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {newCategories}
    </div>
  );
}

export default CategoryFilter;
