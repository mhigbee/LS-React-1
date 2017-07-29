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
      todo: '',
      todoList: [],
    }
    this.handleTodo = this.handleTodo.bind(this);
    this.onAddToClick = this.onAddToClick.bind(this);
  }

  handleTodo(event) {
    // let newTodo = this.state.todo;
    // newTodo = event.target.value;
    // this.setState({todo: newTodo});
    // console.log(event.target.value);
    this.setState({todo: event.target.value});
  }

  onAddToClick() {
    const todoList = this.state.todoList;
    console.log(todoList);
    todoList.push(this.state.todo);
    this.setState({todoList, todo: ''});
    console.log(this.state.todo);
  }


  // const namesList = this.state.namesList;
  //   namesList.push(this.state.nameToAddToList);
  //   this.setState({namesList, nameToAddToList: ''});
  // onKeyPress = {this.prop.todolist.push(newTodo); 
  // function onClick(event
  // // onKeyPress
  // // onKeyPressCapture
  render () {
    return (
      <section className="content-holder">
        <div>
          <ToDoTitle />
          <div className="list-holder">
            <AddToDoItem todo={this.state.todo} handleTodo={this.handleTodo} onAddToClick={this.onAddToClick}/>
          </div>
          <DisplayToDoList todoList={this.state.todoList}/>
        </div>
      </section>
    )
  }
};

ReactDom.render(<App />, document.getElementById('root'));
