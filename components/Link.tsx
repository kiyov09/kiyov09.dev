import { ReactNode } from 'react'

export default function Link({
  href,
  children,
}: {
  href: string
  children: ReactNode | ReactNode[]
}) {
  return (
    <a
      href={href}
      className="border-b-[1px] border-b-sky-300 text-sky-300 hover:border-b-sky-400 hover:text-sky-400"
    >
      {children}
    </a>
  )
}
