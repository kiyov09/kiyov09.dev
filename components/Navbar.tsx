import HamburgerMenu from './Navbar/HamburgerMenu'
import NavbarLink from './Navbar/NavbarLink'
import Cta from './UI/Buttons/Cta'
import Modal from './UI/Modal'

function renderNavbarLinks() {
  return (
    <>
      <li>
        <NavbarLink href="#about">About Me</NavbarLink>
      </li>
      <li>
        <NavbarLink href="#experience">Experience</NavbarLink>
      </li>
      <li>
        <NavbarLink href="#tech">Tech I Love</NavbarLink>
      </li>
      <li>
        <NavbarLink href="#projects">What I&apos;ve Done</NavbarLink>
      </li>
      <li className="relative">
        <Modal trigger={<Cta>Contact Me</Cta>} />
      </li>
    </>
  )
}

export default function Navbar() {
  return (
    <header className="absolute top-10 left-0 right-0 z-20 flex h-14 w-full items-center justify-between pt-2 lg:h-20">
      {/* Logo */}
      <div className="text-xl font-medium uppercase">
        <NavbarLink href="/">kiyov09.dev</NavbarLink>
      </div>

      {/* Mobile only */}
      <HamburgerMenu>{renderNavbarLinks()}</HamburgerMenu>

      {/* Desktop only */}
      <nav className="hidden lg:block">
        <ul className="flex h-full items-center gap-6 font-light">
          {renderNavbarLinks()}
        </ul>
      </nav>
    </header>
  )
}
