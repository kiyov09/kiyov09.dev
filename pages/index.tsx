import type { NextPage } from 'next'
import Head from 'next/head'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'

const Home: NextPage = () => {
  return (
    <div className="relative mx-auto min-h-screen w-full max-w-5xl">
      <Head>
        <title>kiyov09.dev - Enrique Mejias Website</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>

      <Navbar />

      <main className="">
        <Hero />
      </main>
    </div>
  )
}

export default Home
