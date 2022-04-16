import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative flex h-full py-40 bg-transparent">
      <div className="flex flex-1 flex-col justify-center">
        <h1 className="min-w-max bg-blue-gradient bg-clip-text py-4 text-6xl font-semibold tracking-wide text-transparent">
          Hi, there! <span className="text-yellow-500">👋</span> <br />
          I'm Enrique Mejias
        </h1>
        <h2 className="mt-2 text-2xl tracking-wide">
          A Frontend Engineer based in Mexico.
        </h2>
        <div className="mt-6 flex gap-6">
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
      <div className="flex flex-1 items-center justify-center">
        <div className="relative h-96 w-96 overflow-hidden rounded-full ring ring-sky-500/80 ring-offset-8 ring-offset-primary-dark">
          <Image
            src="https://avatars.githubusercontent.com/u/15782488?v=4"
            alt="Me"
            layout="fill"
            className="h-full w-full rounded-full"
          />
        </div>
      </div>
      <div className="absolute -bottom-40 left-1/2 cursor-pointer bg-transparent pt-4">
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
