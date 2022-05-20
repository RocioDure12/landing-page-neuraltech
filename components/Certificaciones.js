import styles from '../styles/certificaciones.module.scss';
import Card from './Card';
import {
    faAward
} from "@fortawesome/free-solid-svg-icons";



export default ({ }) => {

    return (
        <>
            <Card
                icon={faAward}
                title="Consejo Federal de Seguridad Vial Comisión Nacional del Tránsito y la Seguridad Vial"
                description="El sistema DIGIMAX es el primer equipo de radar aprobado para su uso sobre las rutas de la República Argentina.
                Certificado de aprobación de modelo Nº 01A"

            />
            <Card
                icon={faAward}
                title="DNCI. Dirección Nacional de Comercio Interior Metrología Legal"
                description="Certificado de aprobación de modelos:
                DIGIMAX 3.0 (DNCI Nº: 074/2014)
                DIGIMAX 4.0 (DNCI Nº: 257/2015)"
            />
            <Card
                icon={faAward}
                title="INTI. Instituto Nacional de Tecnología Industrial"
                description="Laboratorio encargado de certificar las verificaciones primitivas y periódicas exigidas por la Ley Nacional de Metrología"
            />
        </>


    )
}