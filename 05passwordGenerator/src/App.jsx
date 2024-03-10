import { useState } from 'react'
function App() {
  const [length, setLength] = useState(7)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  
  return (
    <>
     <h1 className='text-5xl text-white text-center'> Password Generator</h1>
    <br/>
     <h3 className='text-2xl text-white text-center'>Using React And Tailwind</h3>
    </>
  )
}

export default App
