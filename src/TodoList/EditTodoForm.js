import React, { useContext } from 'react'
import useInputState from './hooks/useInputState';
import TextField from '@mui/material/TextField';
import { DispatchContext } from './context/todos.context';

export default function EditTodoForm({ id, task, toggleEditForm }) {
    const dispatch = useContext(DispatchContext);
    const [value, handleChange, reset] = useInputState(task);
    // console.log("EDIT FROM RE-RENDER")
    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                dispatch({ type: 'EDIT', id: id, newTask: value });
                reset();
                toggleEditForm();
            }}
            style={{ marginLeft: "1rem", width: "50%" }}
        >
            {/* <TextField
                margin='normal'
                value={value}
                onChange={handleChange}
                fullWidth
                autoFocus
            /> */}
            <TextField id="standard-basic" variant="standard" value={value} onChange={handleChange}/>
        </form>
    )
}