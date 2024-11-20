import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Image from 'next/image'
export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>TeamWork Hacks</title>
                <link rel="icon" href="/teamworkhacks-logo.png" />
            </Head>

            <Header title="TeamWork Hacks - Google Add-on" />

            <main>
                <section className="hero">
                    <div className="hero-image">
                        <Image
                            src="/teamworkhacks-logo.png"
                            alt="TeamWorkHacks"
                            width={561}
                            height={139}
                            priority
                        />
                    </div>
                    <h1 className="hero-title">Streamline Your Workflow with TeamWorkHacks</h1>
                    <p className="hero-subtitle">
                        Empowering students to edit Google services with speed and precision.
                    </p>
                </section>

                <section className="features">
                    <h2>Why Choose TeamWorkHacks?</h2>
                    <p className="feature-description">
                        TeamWorkHacks is a special add-on designed to help students accurately and efficiently edit Google services like Google Slides, Google Docs, and Google Forms.
                    </p>
                    <ul className="feature-list">
                        <li>🚀 Make changes in seconds instead of hours.</li>
                        <li>🔍 Get suggestions to improve document and presentation quality.</li>
                        <li>💡 Stay tuned for exciting new features!</li>
                    </ul>
                </section>

                <section className="links">
                    <p>
                        <a href="/Terms-conditions.html" target="_blank" rel="noopener noreferrer">Terms and Conditions</a> |
                        <a href="/privacy-policy.html" target="_blank" rel="noopener noreferrer"> Privacy Policy</a>
                    </p>
                </section>
            </main>

            <Footer />

            <style jsx>{`
        .container {
          font-family: Arial, sans-serif;
          margin: 0 auto;
          padding: 0 1rem;
          max-width: 800px;
          text-align: center;
        }

        .hero {
          margin: 2rem 0;
          padding: 2rem;
          background: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .hero-title {
          font-size: 2.5rem;
          color: #333;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          color: #555;
        }

        .features {
          margin: 2rem 0;
          padding: 1rem;
        }

        .feature-description {
          font-size: 1rem;
          color: #333;
          margin-bottom: 1rem;
        }

        .feature-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .feature-list li {
          font-size: 1rem;
          margin: 0.5rem 0;
          color: #555;
        }

        .links {
          margin-top: 2rem;
        }

        .links a {
          color: #0070f3;
          text-decoration: none;
        }

        .links a:hover {
          text-decoration: underline;
        }
      `}</style>
        </div>
    )
}
