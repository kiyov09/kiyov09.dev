import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="relative min-h-screen w-screen overflow-x-hidden bg-primary-dark px-6 font-poppins text-sm tracking-wide text-blue-100/75 lg:px-16">
        <div className="absolute inset-x-0 -z-10 h-screen w-screen transform bg-transparent bg-[url(/hero-background-pattern.svg)] bg-auto bg-repeat opacity-70"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
