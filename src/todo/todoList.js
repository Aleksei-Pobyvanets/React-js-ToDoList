import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './todoItem'

const styles ={
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        width: '300px',
        float: "right"
    }
}

function TodoList(props){
    return (
    <div className="wdth">
        <ul style={styles.ul}>
            { props.todos.map((todo, index) => {
                return <TodoItem todo={todo} key={todo.id} index={index} onChange={props.onToggle} />
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