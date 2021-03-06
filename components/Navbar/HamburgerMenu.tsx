import { useRef, useState, MouseEvent } from 'react'
import CloseIcon from '../UI/Icons/CloseIcon'

type HamburgerMenuProps = {
  children: React.ReactNode | React.ReactNode[]
}

export default function HamburgerMenu({ children }: HamburgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const ulRef = useRef<HTMLUListElement>(null)

  const handleChildrenClick = (e: MouseEvent<HTMLUListElement>) => {
    if (e.target === ulRef.current) {
      return
    }
    setIsOpen(false)
  }

  return (
    <>
      {isOpen ? null : (
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
        className={`fixed inset-0 z-20 bg-primary-dark transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button onClick={() => setIsOpen(false)}>
          <CloseIcon />
        </button>
        <ul
          ref={ulRef}
          className="flex h-full flex-col items-center justify-center gap-10 text-lg font-light"
          onClick={handleChildrenClick}
        >
          {children}
        </ul>
      </nav>
    </>
  )
}
