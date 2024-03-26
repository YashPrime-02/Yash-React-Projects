import {createContext,useContext} from 'react'
export const TodoContext = createContext({
todos: [
    {
    id: 1,
    title: 'Todo  Mssg',
    completed: false
    }
] // todo ke saare properties hai isme 

addTodo:(todo) =>{}
updateTodo:(id,todo) =>{}
deleteTodo:(id) =>{} 
toggleComplete:(id) =>{}

})//yahan pe sirf  functionality ke naam honge define ham App.jsx me karenge


export const useTodo=() => {
return useContext(TodoContext) // use context Always needs a context like kispe work karega
}
export const TodoProvider =TodoContext.provider
