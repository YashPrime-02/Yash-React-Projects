import React, { useEffect ,useState} from 'react'

import { useLoaderData } from 'react-router-dom'
function Github() 
{
/*const [data, setData]= useState([])  
  useEffect(() =>
  {
  fetch('https://api.github.com/users/YashPrime-02')
  .then(response => response.json())
  .then(data=> {
    console.log(data)
    setData(data)
  })

},[])    // Method 1 
*/ 
  const data=useLoaderData()

  return (
    <div className='text-center m-4  text-white p-4 text-3xl bg-gray-500' >
        Github Followers : {data.followers}
        <img src={data.avatar_url} alt='GitHub Display Photo' width={350}/>
        
         </div>
  )
}
export default Github
export const githubInfoLoader= async() =>
{

    const response = await fetch('https://api.github.com/users/YashPrime-02')
    return response.json()
}