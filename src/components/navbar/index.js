import React from 'react'
import Navbar from './navbar'
import NavbarLogin from './navbarLogin'

const Index = () => {
  return (
    <>
        {isLogin ? <NavbarLogin /> : <Navbar />}
    </>
  )
}

export default Index