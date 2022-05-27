import Link from '@/components/Link'
import ArrowImage from './ArrowImage'

export default function Experience() {
  return (
    <section id="experience" className="my-8 bg-transparent py-8 lg:my-20">
      {/* Info */}
      <h2 className="inline-block bg-blue-gradient bg-clip-text py-4 text-3xl font-semibold leading-[1.2] tracking-wide text-transparent md:text-4xl md:leading-[1.2] lg:text-5xl lg:leading-[1.2]">
        My Experience
      </h2>
      <p className="mt-6 text-base font-light leading-relaxed tracking-wider">
        I graduated as a Engineer in Computer Science from{' '}
        <Link href="https://www.uci.cu/">UCI</Link> in Havana in 2013. I started
        code for the web full time in 2015 and I fell completely in love with
        the platform. Since them I&apos;ve been coding almost exclusively in
        JavaScript. I love CSS too btw.
      </p>
      <p className="mt-6 text-base font-light leading-relaxed tracking-wider">
        For almost 4 years now I&apos;ve been working as a Frontend Engineer for{' '}
        <Link href="https://envato.mx">Envato Mexico</Link>, mainly as part of
        the engineering team behind the{' '}
        <Link href="https://placeit.net">PlaceIt</Link> platform.
      </p>
      <p className="mt-6 text-base font-light leading-relaxed tracking-wider">
        I currently specialize in <Link href="https://nextjs.org/">NextJS</Link>
        , <Link href="https://www.typescriptlang.org/">TypeScript</Link>, and{' '}
        <Link href="https://tailwindcss.com/">TailwindCSS</Link>. At this
        moment, at least for me, these 3 are the perfect tools to succeed in
        making web apps.
      </p>
      <div className="hidden">
        {/* Work History */}
        <h3 className="mt-8 inline-block bg-blue-gradient bg-clip-text py-4 text-lg font-semibold leading-[1.2] tracking-wide text-transparent md:text-xl md:leading-[1.2] lg:text-2xl lg:leading-[1.2]">
          Work History
        </h3>
        {/* Work cards */}
        <div className="mt-8 flex gap-16">
          <div className="h-96 flex-1 rounded-lg bg-neutral-500 lg:block"></div>
          <div className="relative flex-1">
            <div className="absolute -bottom-5 right-0 aspect-square h-64 w-64 rounded-lg bg-neutral-500 shadow-md lg:block"></div>
            <div className="absolute -top-10 left-0 aspect-square h-64 w-64 rounded-lg bg-neutral-500 shadow-md lg:block"></div>
            <ArrowImage className="absolute right-24 -top-8 w-24 rotate-90 text-neutral-600" />
            <ArrowImage className="absolute -bottom-8 w-24 rotate-180 text-neutral-600" />
          </div>
        </div>
      </div>
    </section>
  )
}
