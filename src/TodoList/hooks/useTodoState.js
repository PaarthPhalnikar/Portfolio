import { useState } from 'react';
import { v4 as uuid} from 'uuid';
import { useLocalStorageState } from './useLocalStorageState';

export default  intialTodos => {
    const [todos,setTodos] = useLocalStorageState("todos", intialTodos);
    return{
        todos,
        addTodo: newTodoText => {
            setTodos([...todos,{ id: uuid(), task: newTodoText, completed: false}])
        },
        removeTodo: todoId => {
            //filter out removed todo  
            const updatedTodos = todos.filter(todo => todo.id !== todoId);
            //call setTodos with new todos array
            setTodos(updatedTodos);
        },
        toggleTodo: todoId => {
            const updatedTodos = todos.map(todo =>
                todo.id === todoId? {...todo, completed: !todo.completed}: todo
            );
            setTodos(updatedTodos);
        },
        editTodo: (todoId,newTask) =>{
            const updtedTodos = todos.map(todo =>
                todo.id === todoId ? {...todo, task: newTask} : todo
            )
            setTodos(updtedTodos)
        }
    }
}