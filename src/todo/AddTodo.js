import React, {useState} from 'react';
import PropTypes from 'prop-types'

function AddTodo({onCreate1}){
    const [value, setValue] = useState('')

    function submitHandler(event){
        event.preventDefault()

        if(value.trim()) {
            onCreate1(value)
            setValue('')
        }
    }

    return (
        <form className="inpt" onSubmit={submitHandler}>
            <input className='inptArea' value={value} onChange={event => setValue(event.target.value)} />
            <button type='submit' className='inptBtn'>Add todo</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate1: PropTypes.func.isRequired
}

export default AddTodo