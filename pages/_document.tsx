import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="relative min-h-screen w-screen overflow-x-hidden bg-primary-dark px-6 font-poppins text-sm tracking-wide text-blue-100 lg:px-16">
        <div className="absolute inset-x-0 -z-10 h-screen w-screen transform bg-transparent bg-[url(/hero-background-pattern.svg)] bg-auto bg-repeat opacity-70"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
