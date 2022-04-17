import Link from 'next/link'

function NavbarLink({ children, href }) {
  return (
    <Link href={href} passHref>
      <a className="relative tracking-wider after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-current after:transition-all hover:after:w-full">
        {children}
      </a>
    </Link>
  )
}

export default function Navbar() {
  return (
    <header className="flex h-20 w-full items-center justify-between">
      <div className="text-xl font-medium uppercase">
        <NavbarLink href="/">kiyov09.dev</NavbarLink>
      </div>
      <nav>
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
            <div className="border-1 border-transparent bg-clip-padding before:absolute before:inset-0 before:-z-10 before:-m-0.5 before:rounded-md before:bg-blue-gradient after:absolute after:inset-0 after:-z-10 after:-m-0 after:rounded-md after:bg-primary-dark hover:scale-105">
              <Link href="#contact" passHref>
                <a className="flex rounded-lg bg-blue-gradient bg-clip-text py-3 px-5 font-medium text-transparent">
                  Contact Me
                </a>
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  )
}
