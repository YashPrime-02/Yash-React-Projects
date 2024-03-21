import React, { useEffect,useState } from "react"
import { ThemeProvider } from "./context/theme"
import ThemeBtn from "./components/ThemeBtn"
import Card from "./components/Card"

function App() { //Method 2 to create Context
  const [themeMode,setThemeMode]=useState("light") 
  
  const lightTheme=() =>{
    setThemeMode("light")
  }
  const darkTheme=() =>{
    setThemeMode("dark")
  }
  //Actual Theme Change 

  useEffect(() =>
  {
   document.querySelector('html').classList.remove("light", "dark")
   document.querySelector('html').classList.add(themeMode)

  },[themeMode])  // hamne template code me change karke theme mode daal diya

  return (

  <ThemeProvider value={{themeMode,lightTheme, darkTheme}}>
      
    <>
<div className="flex flex-wrap min-h-screen items-center">
    <div className="w-full">
       <div className="w-full max-w-sm mx-auto 
           flex justify-end mb-4">
         <ThemeBtn/>
         </div>
            <div className="w-full max-w-sm mx-auto">
              <Card/> 
            </div>
      </div>
</div>
    </>
    </ThemeProvider>
  ) // ab sab cheez wrap ho gayi under Theme Provider 
}

export default App
