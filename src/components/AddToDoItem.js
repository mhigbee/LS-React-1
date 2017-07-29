import React from 'react';

const AddToDoItem = (props) => {
  return (
    <div>
      <input
      type="text"
      value={props.todo}
      onChange={props.handleTodo}
      placeholder="Enter Your To-Do Item"
    />
      <button onClick={props.onAddToClick}>Add To Do</button>
    </div>
    
  )
};

export default AddToDoItem;

      