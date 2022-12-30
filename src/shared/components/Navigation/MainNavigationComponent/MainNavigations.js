import React, { useState } from 'react'
import MainHeader from '../MainHeaderComponent/MainHeader'
import { Link } from 'react-router-dom'

import './MainNavigation.css'
import NavLinks from '../NavLinksComponent/NavLinks'
import SideDrawer from '../SideDrawerComponent/SideDrawer'
import Backdrop from '../../UIElements/BackdropComponent/Backdrop'

const MainNavigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)
  const openDrawerHandler = () => {
    setDrawerIsOpen(true)
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false)
  };

  return (
    <React.Fragment>
        {drawerIsOpen && <Backdrop onClick={closeDrawerHandler}/>}
          <SideDrawer 
            show={drawerIsOpen} 
            onClick={closeDrawerHandler}
          >
            <nav className="main-navigation__drawer-nav">
              <NavLinks/>
            </nav>
          </SideDrawer>
        <MainHeader>
            <button className= "main-navigation__menu-btn" onClick={openDrawerHandler}>
                <span/>
                <span/>
                <span/>
            </button>
            <h1 className="main-navigation__title">
                <Link to="/"> YouPlaces</Link>
            </h1>
            <nav className="main-navigation__header-nav">
                <NavLinks/>
            </nav>
        </MainHeader>
    </React.Fragment>
  )
}

export default MainNavigation