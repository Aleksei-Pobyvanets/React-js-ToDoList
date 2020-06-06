import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from '../TodoItem/todoItem'
import styles from './styles.module.css'


function TodoList(props){
    const {todos, onToggle, removeTodo } = props
    return (
    <div className={styles.wdth} >
        <ul className={styles.ul}>
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