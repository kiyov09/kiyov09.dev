import { useState } from 'react'
import Cta from '../UI/Buttons/Cta'
import CloseIcon from '../UI/Icons/CloseIcon'
import NavbarLink from './NavbarLink'

type HamburgerMenuProps = {
  children: React.ReactNode | React.ReactNode[]
}

export default function HamburgerMenu({ children }: HamburgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {isOpen ? (
        <button onClick={() => setIsOpen(false)}>
          <CloseIcon />
        </button>
      ) : (
        <button onClick={() => setIsOpen(true)}>
          <svg
            className="h-6 w-6 fill-current text-current hover:cursor-pointer hover:text-blue-200 lg:hidden"
            viewBox="0 0 20 20"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      )}

      <nav
        className={`inset-0 z-20 bg-primary-dark ${
          isOpen ? 'fixed' : 'hidden'
        }`}
      >
        <ul className="flex h-full flex-col items-center justify-center gap-10 text-lg font-light">
          {children}
        </ul>
      </nav>
    </>
  )
}
