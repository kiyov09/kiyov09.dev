export default function AboutMe() {
  return (
    <section
      id="about"
      className="my-6 flex flex-col-reverse items-center justify-between gap-16 bg-transparent py-8 lg:my-12 lg:flex-row lg:py-16"
    >
      {/* Images */}
      <div className="hidden h-96 flex-1 rounded-lg bg-neutral-500 lg:block"></div>
      {/* Info */}
      <div className="h-full flex-1 lg:text-right">
        <h2 className="inline-block bg-blue-gradient bg-clip-text py-4 text-3xl font-semibold leading-[1.2] tracking-wide text-transparent md:text-4xl md:leading-[1.2] lg:text-5xl lg:leading-[1.2]">
          About Me
        </h2>
        <p className="mt-6 text-base font-light leading-relaxed tracking-wider">
          Hi! My name is Enrique Mej&iacute;as. I&apos;m a Cuban frontend
          engineer, currently living in Mexico. I love coding for the web (which
          I&apos;ve been doing for more that 8 years now) and, honestly, I
          don&apos;t see myself doing anything else.
        </p>
      </div>
    </section>
  )
}
