import type { NextPage } from 'next'
import Head from 'next/head'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'

const Home: NextPage = () => {
  return (
    <div className="mx-auto min-h-screen max-w-7xl px-16">
      <Head>
        <title>kiyov09.dev - Enrique Mejias Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="-z-10 absolute inset-x-0 -top-24 h-screen w-[110%] rotate-12 transform bg-transparent bg-[url(/hero-background-pattern.svg)] bg-auto bg-repeat xl:rotate-6 xl:-top-16"></div>

      <Navbar />
      <main className="">
        <Hero />
        <div className="h-96"></div>
      </main>
    </div>
  )
}

export default Home
