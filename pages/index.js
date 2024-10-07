import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>TeamWork Hacks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <main>
            <Header title="TeamWork Hacks site!"/>
            <p className="description">
                For <a href="/Terms-conditions.html" target="_blank" rel="noopener noreferrer">Terms and
                Conditions</a> click here.<br/>
                For <a href="/privacy-policy.html" target="_blank" rel="noopener noreferrer">Privacy Policy</a> click here.
            </p></main>

        <Footer/>
    </div>
  )
}
