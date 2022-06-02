import Head from 'next/head'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Clientes from '../components/Clientes'
import Certificaciones from '../components/Certificaciones'
import Contacto from '../components/Contacto'
import Servicios from '../components/Servicios'

export default function Home() {
  return (
    <>
      <Head>
        <title>Neuraltech - Tu aliado en seguridad vial</title>
        <meta name="description" content="Somos una empresa de desarrollo de software de seguridad vial, brindamos un servicio eficiente con los estándares más altos acordes a la demanda del sector" />
        <link rel="icon" href="/images/logo.jpeg" />

<title>Neuraltech - Tu aliado en seguridad vial</title>
<meta name="title" content="Neuraltech - Tu aliado en seguridad vial"/>
<meta name="description" content="Somos una empresa de desarrollo de software de seguridad vial, brindamos un servicio eficiente con los estándares más altos acordes a la demanda del sector."/>

<meta property="og:type" content="website"/>
<meta property="og:url" content="https://neuraltech.com.ar/"/>
<meta property="og:title" content="Neuraltech - Tu aliado en seguridad vial"/>
<meta property="og:description" content="Somos una empresa de desarrollo de software de seguridad vial, brindamos un servicio eficiente con los estándares más altos acordes a la demanda del sector."/>
<meta property="og:image" content="/images/logo.jpeg"/>

<meta property="twitter:card" content="summary_large_image"/>
<meta property="twitter:url" content="https://neuraltech.com.ar/"/>
<meta property="twitter:title" content="Neuraltech - Tu aliado en seguridad vial"/>
<meta property="twitter:description" content="Somos una empresa de desarrollo de software de seguridad vial, brindamos un servicio eficiente con los estándares más altos acordes a la demanda del sector."/>
<meta property="twitter:image" content="/images/logo.jpeg" />
      </Head>

      <Navbar/>
      <Hero />
      <Servicios />
      <Clientes />
      <Certificaciones />
      <Contacto />
      <Footer />

    </>
  )
}
