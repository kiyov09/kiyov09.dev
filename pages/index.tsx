import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div className="mx-auto min-h-screen max-w-7xl px-8 border-white border">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
    </div>
  )
}

export default Home
