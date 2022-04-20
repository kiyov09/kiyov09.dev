import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="relative w-screen overflow-x-hidden bg-primary-dark px-4 font-poppins text-sm tracking-wide text-blue-100 lg:px-16">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
