import './App.css';
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormControl } from 'react-bootstrap';


export default class App extends Component {
  state = {
    todos : [
      {text: "learn html", done: false, id: 1 },
      {text: "learn css", done: false, id: 2 },
    ],
    text: ""
  };
  addTodo= newtodo =>{
    this.setState({ todos:[...this.state.todos, newtodo] });
  };
  handleSubmit = (e) => {
    (e).preventDefault();
    this.addTodo({
      text: this.state.text,
      done: false,
      id: Math.random(),
    });
    this.setState({text: ""})
  };
  removetoDo = (id) =>{
    this.setState({todos: this.state.todos.filter(todo=> todo.id !== id)})
  }
  doneTodo = (id) =>{
    this.setState({todos: this.state.todos.map(todo=> todo.id === id ? {...todo, done: !todo.done}: todo )})
  }
  render() {
    return (
      <div className='App'>
      <Form style={{display: "flex", justifyContent: "space-around", width: "70%", padding: "50px"}} onSubmit={this.handleSubmit}>
      <FormControl type="text" 
      value={this.state.text}
      onChange={(e)=>this.setState({text: e.target.value})} />
      <Button 
      variant="primary" type="submit"
      
    >
    Add
    </Button>
      </Form>
      {this.state.todos.map(todo => (
        <div key={todo.id} style={{display: "flex", justifyContent: "space-around", margin: "50px auto", width: "80%" }}>
        <p style={{textDecoration:todo.done ? "line-through": "none"}}>{todo.text}</p>
      <Button variant="danger" onClick={()=> this.removetoDo(todo.id)} >delete</Button>
      <Button variant="success" onClick={()=>this.doneTodo(todo.id)} >Done</Button> 
      </div>
    ))}
      </div>
    );
  }
}
