import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Staff Wiser - Connecting businesses with skilled virtual professionals since 2018. Expert staffing solutions for social media management, web development, graphic design, and more." />
        <meta name="keywords" content="virtual staffing, remote professionals, social media management, web development, graphic design, virtual assistance" />
        <meta property="og:title" content="Staff Wiser - Your Virtual Team Solution" />
        <meta property="og:description" content="Connecting businesses with skilled virtual professionals since 2018. Expert staffing solutions for modern businesses." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Staff Wiser - Your Virtual Team Solution" />
        <meta name="twitter:description" content="Connecting businesses with skilled virtual professionals since 2018." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
