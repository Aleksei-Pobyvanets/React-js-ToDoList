import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'


function TodoItem({ todo, index, onChange, removeTodo }) {
    const classes = []
    
    if(todo.completed){
        classes.push(styles.done)
    }

    return (
    <li className={styles.li} > 
        <span className={classes.join(' ')}>
            <input 
                className={styles.checkBox2}
                type='checkbox' 
                checked={todo.completed} 
                className={styles.input} 
                onChange={() => onChange(todo.id)} 
            />
            <strong>{index + 1}</strong> 
            &nbsp;
            {todo.title}
        </span>
        
        <button 
            className={styles.rm}
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
