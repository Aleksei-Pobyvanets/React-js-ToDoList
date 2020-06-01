import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './todoItem'

const styles ={
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        width: '290px',
    }
}

function TodoList(props){
    const {todos, onToggle, removeTodo } = props
    console.log(todos)
    return (
    <div className="wdth" >
        <ul style={styles.ul}>
            {todos && todos.map((todo, index) => {
                return <TodoItem removeTodo={removeTodo} todo={todo} key={todo.id} index={index} onChange={onToggle} />
            }) }
        </ul>
    </div>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired,
}

export default TodoList