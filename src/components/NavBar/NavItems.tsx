import Link from 'next/link'

import { NavMenuItems } from '@/components/NavBar/NavTypes'

const navItems = (closeSideMenu: () => void) => (
  <>
    {NavMenuItems.map((navItem) => (
      <Link
        href={navItem.link}
        key={navItem.name}
        role="button"
        tabIndex={0}
        onClick={closeSideMenu}
        onKeyPress={closeSideMenu}
      >
        {navItem.name}
      </Link>
    ))}
  </>
)
const foo = 'foo'

enum SideBarState {
  Open = 'sideNav--width250',
  Closed = 'sideNav--width0',
}

export { foo, navItems, SideBarState }
