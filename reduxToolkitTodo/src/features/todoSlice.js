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
                text: action.payload,
                }
                state.todos.push(todo)
        }, // addTodo ke default syntax, state shows current state and action shows current action
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id!== action.payload)
        } //removeTodo ke default syntax hai ye 
    }
})