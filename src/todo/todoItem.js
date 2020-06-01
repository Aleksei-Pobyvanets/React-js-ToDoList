import React, { useState } from 'react'
import PropTypes from 'prop-types'
import TodoList from './todoList'

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alingItems: 'center',
        padding: '.5rem 1rem', 
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem',
    },
    input: {
        marginRight: '1rem'
    }
}

function TodoItem({ todo, index, onChange, removeTodo }) {
    const classes = []
    
    if(todo.completed){
        classes.push('done')
    }

    return (
    <li style={styles.li} > 
        <span className={classes.join(' ')}>
            <input 
                className="checkBox2"
                type='checkbox' 
                checked={todo.completed} 
                style={styles.input} 
                onChange={() => onChange(todo.id)} 
            />
            <strong>{index + 1}</strong> 
            &nbsp;
            {todo.title}
        </span>
        
        
        <button 
            className='rm'
            onClick={() => removeTodo(todo.id) }
        >&times;</button>
       

    </li>

    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired,

}

export default TodoItem
