import type { NextPage } from 'next'
import Head from 'next/head'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import AboutMe from '@/components/AboutMe'

const Home: NextPage = () => {
  return (
    <div className="relative mx-auto min-h-screen w-full max-w-5xl">
      <Head>
        <title>Enrique Mej&iacute;as</title>

        <meta name="title" content="Hi, there! 👋 I'm Enrique Mejías" />
        <meta
          name="description"
          content="A Frontend Engineer based in Mexico."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="kiyov09.dev" />
        <meta property="og:title" content="Hi, there! 👋 I'm Enrique Mejías" />
        <meta
          property="og:description"
          content="A Frontend Engineer based in Mexico."
        />
        <meta
          property="og:image"
          content="https://kiyov09-dev.vercel.app/social_banner/kiyov09.dev.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="YOUR_URL" />
        <meta name="twitter:title" content="Hi, there! 👋 I'm Enrique Mejías" />
        <meta
          name="twitter:description"
          content="A Frontend Engineer based in Mexico"
        />
        <meta
          name="twitter:image"
          content="https://kiyov09-dev.vercel.app/social_banner/kiyov09.dev.png"
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>

      <Navbar />

      <main className="">
        <Hero />
        <AboutMe />
      </main>
    </div>
  )
}

export default Home
