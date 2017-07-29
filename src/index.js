/*eslint no-unused-vars: "off"*/
import React from 'react';
import ReactDom from 'react-dom';
import ToDoTitle from './components/ToDoTitle';
import DisplayToDoList from './components/DisplayToDoList';
import AddToDoItem from './components/AddToDoItem';

require('!style-loader!css-loader!sass-loader!./index.scss');



class App extends React.Component {
  constructor () {
    super();
    this.state = {
      todo:{
        text:'',
        isCompleted:false
      },
      todoList: []
    }
    this.handleTodo = this.handleTodo.bind(this);
    this.onAddToClick = this.onAddToClick.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  handleTodo(event) {
    this.setState({todo.text: event.target.value});
  }

  onAddToClick() {
    const todoList = this.state.todoList;
    console.log(todoList);
    todoList.push(this.state.todo);
    this.setState({todoList, todo.text: ''});
    console.log(this.state.todo);
  }
  toggleCompleted() {
    if (this.state.todo.isCompleted === true) {
      this.state.todo.isCompleted = false;
    } this.state.todo.isCompleted = true;
  }
  render () {
    return (
      <section className="content-holder">
        <div>
          <ToDoTitle />
          <div className="list-holder">
            <AddToDoItem todo={this.state.todo} handleTodo={this.handleTodo} onAddToClick={this.onAddToClick}/>
          </div>
          <DisplayToDoList toggleCompleted={this.state.todo.isCompleted} todoList={this.state.todoList}/>
        </div>
      </section>
    )
  }
};

ReactDom.render(<App />, document.getElementById('root'));
