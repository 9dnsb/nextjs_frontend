import Image from 'next/image'
import Link from 'next/link'

import { NavMenuItems } from '@/components/NavBar/NavTypes'

function FullSizeMenu() {
  return (
    <div id="fullMenu">
      <Image
        id="logo"
        src="/assets/img/logo.png"
        width={200}
        height={200}
        alt=""
      />
      <div id="items">
        {NavMenuItems.map((navItem) => (
          <Link
            href={navItem.link}
            key={navItem.name}
            role="button"
            tabIndex={0}
            onClick={() => {}}
            onKeyPress={() => {}}
          >
            {navItem.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default FullSizeMenu
