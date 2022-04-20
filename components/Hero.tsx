import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative flex h-screen max-h-screen flex-col-reverse items-center justify-center bg-transparent pb-16 lg:flex-row">
      <div className="flex flex-col justify-center text-center lg:flex-1 lg:text-left">
        <h1 className="w-full bg-blue-gradient bg-clip-text py-4 text-3xl font-semibold tracking-wide text-transparent md:text-5xl lg:text-6xl 2xl:text-7xl">
          <span className="mb-2 block">
            Hi, there! <span className="text-yellow-500">👋</span>
          </span>
          I&apos;m Enrique Mej&iacute;as
        </h1>
        <h2 className="mt-2text-base tracking-wider md:text-xl">
          A Frontend Engineer based in Mexico.
        </h2>
        <div className="mt-8 flex items-center justify-center gap-6 lg:justify-start">
          <a
            href="https://github.com/kiyov09"
            target="_blank"
            rel="noopener noreferrer"
            className="h-6 w-6 hover:scale-110"
          >
            <Image
              src="/github.svg"
              alt="Github Icon"
              width={24}
              height={24}
              className="h-6 w-6"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/kiyov09/"
            target="_blank"
            rel="noopener noreferrer"
            className="h-6 w-6 hover:scale-110"
          >
            <Image
              src="/linkedin.svg"
              alt="LinkedIn Icon"
              width={24}
              height={24}
              className="h-6 w-6"
            />
          </a>
          <a
            href="https://twitter.com/kiyov09"
            target="_blank"
            rel="noopener noreferrer"
            className="h-6 w-6 hover:scale-110"
          >
            <Image
              src="/twitter.svg"
              alt="Twitter Icon"
              width={24}
              height={24}
              className="h-6 w-6"
            />
          </a>
        </div>
      </div>
      <div className="mb-8 mr-0 flex items-center justify-center lg:mr-16 lg:mb-0">
        <div className="relative h-32 w-32 rounded-full border-2 border-transparent bg-clip-padding before:absolute before:inset-0 before:-z-10 before:-m-2 before:rounded-full before:bg-blue-gradient after:absolute after:inset-0 after:-z-10 after:-m-1 after:rounded-full after:bg-primary-dark md:h-60 md:w-60 lg:h-80 lg:w-80 xl:h-96 xl:w-96">
          <Image
            src="https://avatars.githubusercontent.com/u/15782488?v=4"
            alt="Me"
            layout="fill"
            className="h-full w-full rounded-full"
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 cursor-pointer bg-transparent pt-4">
        <Image
          className="bottom-0 animate-bounce"
          src="/scroll-indicator.svg"
          alt="Scroll indicator"
          width={51}
          height={65}
        />
      </div>
    </section>
  )
}
