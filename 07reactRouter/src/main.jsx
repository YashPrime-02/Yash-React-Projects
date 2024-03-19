import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Route,RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx' 
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'


  /* //Method-1
  [
  { 
    path: '/',  
    element: <Layout/>, // Coz Saare routes Layout me hai
    children: [
      { 
      path:"", //Home page hai so it doesn't need path
      element: <Home/>,
      },

      {
      path: "about",
      element: <About/>,
      },
      {
       path:"contact",
       element: <Contact/>, 
      }, 

    ] */ 

    //Method 2 Preferred  and neeche ham userid me different user ke hisaab se nature rakh sakte
    const router= createBrowserRouter( 
    createRoutesFromElements(
      <Route path='/' element={ <Layout /> }>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/contact' element={ <Contact /> } />
        <Route path='/user/:userid' element={ <User /> } /> 
        <Route 
        path='/github' 
        element={ <Github />} 
        loader= {githubInfoLoader}
        
         />
    </Route>
    )
)

     




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
