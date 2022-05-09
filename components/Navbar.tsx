import Link from 'next/link'
import { useState } from 'react'

function NavbarLink({
  children,
  href,
}: {
  children: React.ReactNode
  href: string
}) {
  return (
    <Link href={href} passHref>
      <a className="relative font-medium tracking-wider after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-blue-gradient after:transition-all hover:bg-blue-gradient hover:bg-clip-text hover:text-transparent hover:after:w-full">
        {children}
      </a>
    </Link>
  )
}

function CloseIcon() {
  return (
    <svg
      className="fixed top-6 right-6 z-50 h-6 w-6 fill-current text-current hover:cursor-pointer hover:text-blue-200"
      viewBox="0 0 20 20"
    >
      <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
    </svg>
  )
}

function HamburguerMenu() {
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
            <ContactMeBtn />
          </li>
        </ul>
      </nav>
    </>
  )
}

function ContactMeBtn() {
  return (
    <div
      className="border-1 border-transparent bg-clip-padding before:absolute
      before:inset-0 before:-z-10 before:-m-0.5 before:rounded-md before:bg-blue-gradient after:absolute after:inset-0 after:-z-10 after:-m-0 after:rounded-md after:bg-primary-dark hover:scale-105"
    >
      <Link href="#contact" passHref>
        <a className="inline-block rounded-lg bg-blue-gradient bg-clip-text py-3 px-5 font-medium text-transparent">
          Contact Me
        </a>
      </Link>
    </div>
  )
}

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 flex h-14 w-full items-center justify-between pt-2 lg:h-20">
      <div className="text-xl font-medium uppercase">
        <NavbarLink href="/">kiyov09.dev</NavbarLink>
      </div>

      <HamburguerMenu />

      <nav className="hidden lg:block">
        <ul className="flex h-full items-center gap-6 font-light">
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
            <ContactMeBtn />
          </li>
        </ul>
      </nav>
    </header>
  )
}
