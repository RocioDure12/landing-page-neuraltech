import styles from '../styles/servicios.module.scss';
import CardProducto from './CardProducto';

import {
    faCarTunnel,
    faCar,
    faChalkboardUser,
    faMobileScreen,
    faRoad,
    faTrafficLight,
    faWineBottle,
} from "@fortawesome/free-solid-svg-icons";


export default () => {

    return (

        <div id="servicios" className={styles.servicios}>
            <h2>Servicios y productos</h2>

            <div className={styles.container}>
                <CardProducto
                    title="Tótem indicador de velocidad"
                    icon={faCarTunnel}
                    description="Radar con doble sistema de lectura: digital, para la tradicional lectura numérica y analógica que muestra con luces la advertencia de límite de velocidad"
                />
                <CardProducto
                    title="Red Light Enforcement "
                    icon={faTrafficLight}
                    description="Sistema de camaras inteligentes para el control de cruce con luz roja"
                />
                <CardProducto
                    title="LPR"
                    icon={faCar}
                    description="Sistema de Reconocimiento de chapas patentes - LPR (Licence Plate Recognition)"
                />
                <CardProducto
                    title="SPGIT"
                    icon={faChalkboardUser}
                    description="Gestión de actas de infracción para constatación, procesamiento e impresión"
                />
                <CardProducto
                    title="SIVU"
                    icon={faMobileScreen}
                    description="Es un sistema digital de generacion de  infracciones urbanas"
                />

                <CardProducto
                    title="Sistema de luces bajas y cinturon"
                    icon={faRoad}
                    description="Control de luces bajas, cinturon de seguridad a través de un sistema inteligente"
                />

                <CardProducto
                    title="Alcoholimetro"
                    icon={faWineBottle}
                    description="Dispositivos de última generacion para la deteccion de alcohol en sangre"
                />
            </div>

        </div>
    )
}