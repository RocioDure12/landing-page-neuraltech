import styles from '../styles/navbar.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import {
    faBars
} from "@fortawesome/free-solid-svg-icons";

export default () => {

    return (
        <>
        <nav className={styles.menu}>
        <ul>
                <li><FontAwesomeIcon icon={faBars} /></li>
                <li><a href='#servicios'>Servicios</a></li>
                <li><a href="#certificaciones">Certificaciones</a></li>
                <li><a href='#clientes'>Clientes</a></li>    
                <li><a href='#contacto'>Contacto</a></li>
            </ul>
        </nav>
        <nav className={styles["nav-bar"]}>
            <ul>
                <li><img alt="logo" src='images/logo.jpeg'/></li>
                <li><a href='#servicios'>Servicios</a></li>
                <li><a href="#certificaciones">Certificaciones</a></li>
                <li><a href='#clientes'>Clientes</a></li>    
                <li><a href='#contacto'>Contacto</a></li>
            </ul>

        </nav >
        </>
    )
}