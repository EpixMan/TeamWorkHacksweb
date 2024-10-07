import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>TeamWork hacks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="TeamWork hacks"/>
        <p className="description">
          Click to see
        </p>
      </main>

      <Footer />
    </div>
  )
}
