import type { NextPage } from 'next'
import Head from 'next/head'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'

const Home: NextPage = () => {
  return (
    <div className="relative mx-auto min-h-screen w-full max-w-7xl">
      <Head>
        <title>kiyov09.dev - Enrique Mejias Website</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>

      <div className="absolute inset-x-0 -top-24 -z-10 h-screen w-full transform bg-transparent bg-[url(/hero-background-pattern.svg)] bg-auto bg-repeat xl:-top-16 xl:rotate-6"></div>

      <Navbar />
      <main className="">
        <Hero />
        <div className="h-96 border-red-300"></div>
      </main>
    </div>
  )
}

export default Home
