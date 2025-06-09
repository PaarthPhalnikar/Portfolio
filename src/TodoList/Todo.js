import React, { useContext,memo } from 'react'
import useToggleState from './hooks/useToggleState'
import EditTodoForm from './EditTodoForm';
import { IconButton, ListItem, ListItemSecondaryAction, ListItemText } from '@mui/material'
// import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Checkbox from '@mui/material/Checkbox';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {DispatchContext} from './context/todos.context';
function Todo({ id, task, completed }) {
    const dispatch = useContext(DispatchContext)
    const [isEditing, toggle] = useToggleState(false);
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <ListItem style={{ height: "64px" }}>
            {isEditing ? (
                <EditTodoForm id={id} task={task} toggleEditForm={toggle} />
            ) : (
                <>
                    <Checkbox {...label}  tabIndex={-1}
                        checked={completed}
                        onClick={() => dispatch({ type: "TOGGLE", id: id })} /> 
                    <ListItemText style={{ textDecoration: completed ? "line-through" : "none" }}>
                        {task}
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton
                            aria-label='Delete'
                            onClick={() => dispatch({ type: "REMOVE", id: id })}>
                                <DeleteIcon/>
                        </IconButton>
                        <IconButton aria-label='Edit' onClick={toggle}>
                            <EditIcon/>
                        </IconButton>
                    </ListItemSecondaryAction>
                </>
            )}
        </ListItem>
    )
}

export default memo(Todo)