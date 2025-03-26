import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import "../pages/pages.css"
import Footer from '../components/Footer/Footer'
import { Outlet, useLocation } from 'react-router-dom'

function Layout() {
  const location = useLocation();
  const isPresentationPage = location.pathname === '/' || location.pathname === '/presentationpage';
  
  return (
    <>
      <Navbar variant={isPresentationPage ? 'presentation' : 'default'} />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout;