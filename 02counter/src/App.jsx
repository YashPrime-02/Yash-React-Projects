import { useState } from 'react'
import './App.css'

function App()
 {
 let[counter,setCounter]= useState(15) //it propogates state changes to UI components , bracket me default value hota
//let counter=15
const addValue =() => 
{
if(counter>=24)
return(console.log("UPPER LIMIT REACHED"))
else 
{  
counter=counter+1
setCounter(counter) //let use kiya coz update counter kar rahe value
//console.log(counter)
}
}
const removeValue =() => 
{
  if(counter<=0)
  return(console.log("LOWER LIMIT REACHED"))
  else{
counter=counter-1
setCounter(counter)
//console.log(counter)
}
}

  return (
    <>
      <h1> <strong> Number Counter App </strong> </h1>
      <h2>(ADD OR REMOVE VALUES)</h2>
      <h2>Current Counter Value: {counter}</h2>
      <button onClick={addValue}> Add Value</button>
      <br/>
      <br/>
      <button onClick={removeValue}> Remove Value</button>
    </>
  )
}

export default App
