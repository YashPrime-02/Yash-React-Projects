
import React from 'react'
import { useState ,useEffect } from 'react'
import{TodoProvider} from './contexts'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() 
{
 const [todos,setTodos] = useState([])

 const addTodo = (todo) =>{
   setTodos((prev)=>[{ id: Date.now(), ...todo}, ...prev] )

 } 
// ye state me nahi aaya hai form se aya hai

const updateTodo = (id, todo) =>{
setTodos((prev)=> prev.map((prevTodo)=>(prevTodo.id === id ? todo : prevTodo))) 
//we checking as prev.map se saare todos mil jayenge and ham match karenge kaunse id wale todo me change hoga
}
  
const deleteTodo = (id) =>{
setTodos((prev)=> prev.filter((Todo)=> Todo.id!== id))
} //delete karte waqt new array banta so we use filter so it lets all value in new array except jo delete honi
 
const  toggleComplete = (id) => {

  setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id === id? 
  {...prevTodo, completed:!prevTodo.completed} : prevTodo))
} /* map lagake ham  find karenge kaunse id wale todo hai jisme update karna 
,spread operator se saare values se completed change karo bas sabme se*/
 

//Use Effect se local storage ka khel 
useEffect(()=>{
  //const todos =JSON.parse(localStorage.getItem("todos")) /*LocalStorage has values in string so for 
  //use JSON me convert karte using JSON.parse*/
  // Retrieve the value from localStorage
  const todos = JSON.parse(localStorage.getItem("todos"))

  if (todos && todos.length > 0) {
    setTodos(todos)
  }
}, [])

console.log(todos)

useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos))
}, [todos]) 
//Values Sirf String Me pass hoti so stringify  se convert  kiya





 return (
    <TodoProvider  value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) =>( 
                        <div key={todo.id} 
                          className='w-full'>

                            <TodoItem todo={todo}/>
                        </div>
                        ))
                        }

                    </div>
                </div>
            </div>
    
    </TodoProvider>
  )
}

export default App
