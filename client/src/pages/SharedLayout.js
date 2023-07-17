import React from 'react';
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

import Navbar from '../components/Navbar/Navbar'
import Notification from '../components/Notification/Notification'
import Cart from '../features/cart/Cart'

const SharedLayout = () => {

  const [displayCart, setDisplayCart] = useState(false);
  const [displayAlert, setDisplayAlert] = useState(false);

  const toggleCart = () => {
    setDisplayCart(!displayCart)
  }

  const toggleAlert = () => {
    setDisplayAlert(!displayAlert)
    setTimeout(() => {
      setDisplayAlert(false)
    }, 3000);
  }

  return (
    <>
      {displayAlert && <Notification message={"product has been added to cart"} type={"success"}/>}
      <Navbar toggleCart={toggleCart} />
      {displayCart && <Cart toggleCart={toggleCart} />}
      <Outlet context={[displayCart, setDisplayCart, toggleAlert]} />
      <Footer />
    </>
  )
}

export default SharedLayout