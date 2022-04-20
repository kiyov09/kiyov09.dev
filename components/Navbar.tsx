import Link from 'next/link'

function NavbarLink({
  children,
  href,
}: {
  children: React.ReactNode
  href: string
}) {
  return (
    <Link href={href} passHref>
      <a className="relative tracking-wider after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-current after:transition-all hover:after:w-full">
        {children}
      </a>
    </Link>
  )
}

function HamburguerMenu() {
  return (
    <svg
      className="h-6 w-6 fill-current text-current hover:cursor-pointer hover:text-blue-200 lg:hidden"
      viewBox="0 0 20 20"
    >
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
  )
}

export default function Navbar() {
  return (
    <header className="flex h-20 w-full items-center justify-between">
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
