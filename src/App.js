import React from 'react';
import TodoList from './todo/todoList'
import AddTodo from './todo/AddTodo';



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
      <div className="wrapper">
        <h1 className="txt">React ToDo List</h1>

        <AddTodo onCreate1={addTodo} />
        
        <div className='ulList'>
          <div>
            {todos.length ? <TodoList todos={todosStatus(todos, false)} removeTodo={removeTodo} onToggle={toggleTodo} /> : <p className="no">No todos!</p> }
          </div>
          <div>
            {todos.length ? <TodoList todos={todosStatus(todos, true)} removeTodo={removeTodo} onToggle={toggleTodo}  /> : <p className="no">No todos!</p>}
          </div>
        </div>   


      </div>
  )
}

export default App;
