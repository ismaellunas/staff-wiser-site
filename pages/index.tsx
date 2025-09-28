import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Process from '../components/Process'
import Testimonials from '../components/Testimonials'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Staff Wiser - Your Virtual Team Solution | Expert Staffing Since 2018</title>
        <meta name="description" content="Staff Wiser connects businesses with skilled virtual professionals since 2018. Expert staffing solutions for social media management, web development, graphic design, and more." />
        <meta name="keywords" content="virtual staffing, remote professionals, social media management, web development, graphic design, virtual assistance, staffing agency" />
        <meta property="og:title" content="Staff Wiser - Your Virtual Team Solution" />
        <meta property="og:description" content="Connecting businesses with skilled virtual professionals since 2018. Expert staffing solutions for modern businesses." />
        <meta property="og:url" content="https://staffwiser.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Staff Wiser - Your Virtual Team Solution" />
        <meta name="twitter:description" content="Connecting businesses with skilled virtual professionals since 2018." />
        <link rel="canonical" href="https://staffwiser.com" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Staff Wiser",
              "url": "https://staffwiser.com",
              "logo": "https://staffwiser.com/logo.png",
              "description": "Connecting businesses with skilled virtual professionals since 2018",
              "foundingDate": "2018",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-123-4567",
                "contactType": "customer service",
                "email": "hello@staffwiser.com"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "sameAs": [
                "https://linkedin.com/company/staffwiser",
                "https://twitter.com/staffwiser"
              ]
            })
          }}
        />
      </Head>

      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Services />
          <Process />
          <Testimonials />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
