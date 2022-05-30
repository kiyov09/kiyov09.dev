import Link from 'next/link'

export default function NavbarLink({
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
