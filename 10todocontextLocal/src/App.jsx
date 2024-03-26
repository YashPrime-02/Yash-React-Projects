import { useState ,useEffect } from 'react'
import{TodoProvider} from './contexts'

function App() 
{
 const [todos,setTodos] = useState([])
 const addTodo = (todo) =>{
   setTodos((prev)=>[{ id: Date.now(), ...todo}, ...prev ])

 } 
// ye state me nahi aaya hai form se aya hai

const updateTodos = (id, todo) =>{
setTodos((prev)=> prev.map((prevTodo)=>(prevTodo.id === id ? todo : prevTodo))) 
//we checking as prev.map se saare todos mil jayenge and ham match karenge kaunse id wale todo me change hoga
}
  
const deleteTodo = (id) =>{
setTodos((prev)=> prev.filter((prevTodo)=> prevTodo.id!== id))
} //delete karte waqt new array banta so we use filter so it lets all value in new array except jo delete honi
 
const  toggleComplete = (id) => {

  setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id === id? {...prevTodo, completed:!prevTodo.completed} : prevTodo))
} /* map lagake ham  find karenge kaunse id wale todo hai jisme update karna 
,spread operator se saare values se completed change karo bas sabme se*/
 

//Use Effect se local storage ka khel 
useEffect(()=>{
  
  
} ,[] )





 return (
    <TodoProvider  value=
    {{
      todos,
      updateTodos,
      addTodo,
      deleteTodo,
      toggleComplete,
    }}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
    
    </TodoProvider>
  )
}

export default App
