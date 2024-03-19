import React from 'react'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
} //with Help of Outlet wo layout ko base component use karke uske upar ya neeche me cheeze same rakhega like here Header and Footer

export default Layout