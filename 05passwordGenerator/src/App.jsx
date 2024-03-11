import { useState, useCallback } from 'react'
function App() {
  const [length, setLength] = useState(7)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword]= useState(""); // password generate hona hai automatically
 
  const passwordGenerator = useCallback(() => 
  { // this is password generator function (js ka  basics being used here)

    let pass="" // password generated
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+= "0123456789"
    if(charAllowed) str+= "!@#$%^&*()-_=+[{]}\\|;:,<.>/?"
     // now we have to figure out how much length of password we need to generate random password
     
    for(let i=1;i<=length;i++) 
    {
     let char=Math.floor(Math.random()*str.length+1) 
     pass+=str.charCodeAt(char)
    }
    setPassword(pass)
  
  } ,[length,numberAllowed,charAllowed,setPassword])
  //Set password is also dependency of passwordGenerator





 
  return (
    <>
     <h1 className='text-5xl text-white text-center'> Password Generator</h1>
    <br/>
     <h3 className='text-2xl text-white text-center my-3'>Using React And Tailwind</h3>
     <br/><br/>
   <div className='w-full max-w-md mx-auto  rounded-lg px-2  my-8 text-blue-400
      bg-gray-600 shadow-none'>
     <div className='flex shadow rounded-lg overflow-hidden mb-4'>
       
     <input
      type='text'
      value={password}
      placeholder='Password'
      className='outline-none w-full py-1 px-4'
      readOnly
     ></input>

     <button className='outline-none bg-blue-600 text-white px-3 py-0.5 '>COPY</button>


    </div>
      <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={5}
            max={30}
            value={length}
            className='cursor-pointer'
            onChange={ (e) =>{setLength(e.target.value)} } //this is responsible for for functional slider where e is just event like here we use slider 
            />
            <label> Length is set to :  {length} </label>
         </div>

            <div className=' flex items-center gap-x-1'>
            
            <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            
            onChange={()=>
            {
            
            setNumberAllowed(prev => !prev)
            }
           }
            />
           <label> Numbers </label>
            
            
            
          </div>
 
          <div className=' flex items-center gap-x-1'>
            
            <input 
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            
            onChange={()=>
            {
            
            setCharAllowed(prev => !prev) //jisse check true and false dono ho sake changes
            }
           }
            />
           <label> Characters </label>
            
            
            
          </div>           
      </div>

  </div>
    </>
  )
}

export default App
