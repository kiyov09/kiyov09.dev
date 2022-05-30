type CtaProps = {
  children: React.ReactNode
  className?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export default function Cta({ children, className, onClick }: CtaProps) {
  return (
    <button
      className={`border-1 group relative z-10 mx-auto block border-transparent bg-clip-padding before:absolute before:inset-0 before:-z-10 before:-m-0.5 before:rounded-md before:bg-blue-gradient after:absolute after:inset-0 after:-z-10 after:-m-0 after:rounded-md after:bg-primary-dark hover:text-white hover:after:bg-blue-gradient lg:mx-0 ${className}`}
      onClick={onClick}
    >
      <span className="inline-block rounded-lg bg-blue-gradient bg-clip-text py-3 px-5 font-medium text-transparent group-hover:text-white">
        {children}
      </span>
    </button>
  )
}
