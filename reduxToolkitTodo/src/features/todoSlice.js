import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
todos: [{id: 1, text: "Hello World!"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo={
                id: nanoid(),
                text: action.payload, // coz action me payload me values milegi coz payload is itself an object 
                }
                state.todos.push(todo)
        }, // addTodo ke default syntax, state shows current state and action shows current action
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id!== action.payload)
        } //removeTodo ke default syntax hai ye 
    
    //Making of updateTodo left 
    }
})