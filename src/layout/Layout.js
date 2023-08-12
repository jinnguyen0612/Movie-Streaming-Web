import React from 'react';
import NavBar from "../components/nav/NavBar"
import Footer from "../components/Footer"

function Layout({children}) {
  return (
    <>
    <div className='bg-main text-white'>
        <NavBar/>
        {children}
        <Footer/>
    </div> 
    </>
  )
}

export default Layout