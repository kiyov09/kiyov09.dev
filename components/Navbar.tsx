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
        <ul className="flex h-full items-center gap-6">
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
          <li>
            <Link href="#contact" passHref>
              <a className="flex rounded-lg bg-blue-gradient py-3 px-6 text-white hover:scale-105">
                Contact Me
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
