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
        <meta name="description" content="Somos una empresa de desarrollo de software de seguridad vial, brindamos un servicio eficiente con los estándares más altos acordes a la demanda del sector." />
        <link rel="icon" href="/images/logo.jpeg" />
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
