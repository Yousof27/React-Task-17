import React, { useReducer } from 'react'
import './Hooks.css'

const initialForm = {
    username: '',
    email: '',
    notes: ''
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'input':
            return { ...state, [action.field]: action.payload }
        case 'reset': return initialForm;
        default: return state;
    }
}

function Hooks() {
    const [state, dispatch] = useReducer(reducer, initialForm);

    const handleChange = (e) => {
        dispatch({
            type: 'input',
            field: e.target.name,
            payload: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name='username' placeholder='username' value={state.username} onChange={handleChange} />
            <input type="email" name='email' placeholder='username' value={state.email} onChange={handleChange} />
            <textarea name="notes" placeholder='notes' value={state.notes} onChange={handleChange}></textarea>

            <button type='button' onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Hooks;