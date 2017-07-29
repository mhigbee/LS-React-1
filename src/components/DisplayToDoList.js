import React from 'react';

const DisplayToDoList = (props) => {
  return (
    <ul>
      {props.todoList.map((name, index) => {
          return <li key={ index }>{name}</li>;
      })}
    </ul>
  )
};

export default DisplayToDoList;
