import { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

import { navItems, SideBarState } from '@/components/NavBar/NavItems'

function SideMenu() {
  const [sideNavStyle, setsideNavStyle] = useState(SideBarState.Closed)
  const openSideMenu = () => {
    setsideNavStyle(SideBarState.Open)
  }
  const closeSideMenu = () => {
    setsideNavStyle(SideBarState.Closed)
  }

  return (
    <div id="navBarSmall">
      <div id={sideNavStyle}>
        <a
          role="button"
          id="closeBtn"
          onClick={closeSideMenu}
          onKeyPress={closeSideMenu}
          tabIndex={0}
        >
          &times;
        </a>
        {navItems(closeSideMenu)}
      </div>
      <button
        aria-label="menu"
        id="menuButton"
        type="button"
        onClick={openSideMenu}
      >
        <AiOutlineMenu size="24" />
      </button>
    </div>
  )
}

export default SideMenu
