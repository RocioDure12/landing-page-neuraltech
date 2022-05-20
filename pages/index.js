import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/Card'
import Hero from '../components/hero'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.scss'
import Footer from '../components/Footer'
import Sponsors from '../components/Sponsors'


import {
  faCarTunnel,
  faCar,
  faChalkboardUser,
  faMobileScreen,
  faRoad,
  faTrafficLight,
  faWineBottle,
} from "@fortawesome/free-solid-svg-icons";



export default function Home() {
  return (


    <div className={styles.container}>

      <Head>
        <title>Neuraltech</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Card
        title="Tótem indicador de velocidad"
        icon={faCarTunnel}
        description="Radar con doble sistema de lectura: digital, para la tradicional lectura numérica y analógica que muestra con luces la advertencia de límite de velocidad"
      />
      <Card
        title="Red Light Enforcement "
        icon={faTrafficLight}
        description="Sistema de semáforos inteligentes para el control de cruce con luz roja"
      />
      <Card
        title="LPR"
        icon={faCar}
        description="Sistema de Reconocimiento de chapas patentes - LPR (Licence Plate Recognition)"
      />
      <Card
        title="SPGIT"
        icon={faChalkboardUser}
        description="Gestión de actas de infracción para constatación, procesamiento e impresión"
      />
      <Card
        title="SIVU"
        icon={faMobileScreen}
        description="Control de infracciones a través de un sistema digital"
      />

      <Card
        title="Sistema de luces bajas y cinturon"
        icon={faRoad}
        description="Control de luces bajas, cinturon de seguridad a través de un sistema inteligente"
      />

      <Card
        title="Alcoholimetro"
        icon={faWineBottle}
        description="Dispositivos de última generacion para la deteccion de alcohol en sangre"
      />
      <Sponsors />
      <Footer />

    </div>
  )
}
