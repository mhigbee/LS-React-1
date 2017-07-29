import React from 'react';

const DisplayToDoList = (props) => {
  const taskStyle = {
          color: isCompleted ? 'green' : 'red',
          cursor: 'pointer'
      };
  return (
    <ul>
      {props.todoList.map((name, index) => {
          return <li style={taskStyle}
          onClick={this.props.toggleCompleted} key={ index }>{name}</li>;
      })}
    </ul>
  )
};

export default DisplayToDoList;
