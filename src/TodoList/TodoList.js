import React, { useContext } from 'react';
import Todo from './Todo';
import { TodosContext } from './context/todos.context';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
function TodoList() {
    const todos = useContext(TodosContext);
    // console.log(todos)
    if (todos.length)
        return (
            <Paper>
                <List>
                    {todos.map((todo, i) =>
                        //To add a key to a fragment, we have to use the Long-hand version
                        //rather than <> </>, we have to use <React.Fragment>
                        <React.Fragment key={i}>
                            <Todo {...todo} key={todo.id} />
                            {i < todos.length - 1 && <Divider />}
                        </React.Fragment>
                    )}
                </List>
            </Paper>
        );
    return null;
}
export default TodoList;
