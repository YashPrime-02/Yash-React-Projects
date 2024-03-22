import { useState } from 'react'

import './App.css'
import Card from './Components/Card'
function App() {
  return (
    <>
      <h1 className='bg-blue-500 text-black p-4 rounded-xl mb-4'>Tailwind Test || Yash Mishra</h1>
      
      <Card username="Yash" btn_text="View "/>
      
      <Card username="Shreyash" btn_text="Visit "/>
   
    </>
  )
}

export default App
