import React from "react";
import UserContext from "./UserContext";
import { useState } from "react";

const UserContextProvider = ({children}) => // jo bhi aa raha de dega children as it is
{
const[user,setUser]=useState([])    

return(
<UserContext.Provider value={{user, setUser}}>    
{children} 
</UserContext.Provider>
) //Provider ke thru values utha sake tabhie "value" use kiya (ACCESS THRO)

}

export default UserContextProvider