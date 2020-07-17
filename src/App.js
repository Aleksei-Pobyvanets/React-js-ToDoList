import React from 'react';
import TodoList from './todoList/todoList'
import AddTodo from './AddTodo/AddTodo';
import styles from './styles.module.css';

class Gg extends React.Component{
  constructor(props){
    super(props);
    this.state={apiResponse:""};
  }

  callAPI(){
    fetch("http://localhost:3000/testApi")
    .then(res => res.text())
    .then(res => this.setState({apiResponse: res}));
  }

  componentWillMount(){
    this.callAPI();
  }
}

function App() {
  const [todos, setTodos] = React.useState([
    {id: 1, completed: true, title: 'Купить хлеб'},
    {id: 2, completed: false, title: 'Купить масло'},
    {id: 3, completed: false, title: 'Купить молоко'},
  ])

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo
    }))
  }
  function renderUl(completed, todos) {
    return todos.length ? <TodoList todos={todosStatus(todos, completed)} removeTodo={removeTodo} onToggle={toggleTodo} /> : <p className={styles.no}>No todos!</p>
  }
  
  function removeTodo(id) {
    return setTodos(todos.filter(todo => todo.id !== id))
  }

  function todosStatus(todos, boolion) {
    return todos.filter(todo => todo.completed === boolion)
  }

  function addTodo(title){
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false
    }]))
  }

  return (
      <div className={styles.wrapper}>
        <h1 className={styles.txt}>React ToDo List</h1>

        <AddTodo onCreate1={addTodo} />
        
        <div className={styles.ulList}>
          <div>
            {renderUl(false, todos)}
          </div>
          <div>
            {renderUl(true, todos)}
          </div>
        </div>   

        <div>
          <p>{this.state.apiResponse}</p>
        </div>

      </div>
  )
}

export default App;
