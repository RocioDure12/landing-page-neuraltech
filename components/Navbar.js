import styles from '../styles/navbar.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faBars,
    faXmark
} from "@fortawesome/free-solid-svg-icons";

import React, { useState, useEffect } from 'react';



export default () => {

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const [menuVisible, setMenuVisible] = useState(false);

    return (

        <>
            <div className={styles.appbar}>
                <div onClick={toggleMenu}><FontAwesomeIcon icon={faBars}/></div>
            </div>
            <nav className={styles.menu} style={{ display: menuVisible ? 'block' : 'none' }}>
                <ul>
                    <li><a href='#servicios'>Servicios</a></li>
                    <li><a href="#certificaciones">Certificaciones</a></li>
                    <li><a href='#clientes'>Clientes</a></li>
                    <li><a href='#contacto'>Contacto</a></li>
                </ul>
                <div className={styles["close-button"]} onClick={toggleMenu}>
                <FontAwesomeIcon icon={faXmark} />
                </div>
            </nav>

            <nav className={styles["nav-bar"]}>
                <ul>
                    <li><img alt="logo" src='images/logo.jpeg' /></li>
                    <li><a href='#servicios'>Servicios</a></li>
                    <li><a href="#certificaciones">Certificaciones</a></li>
                    <li><a href='#clientes'>Clientes</a></li>
                    <li><a href='#contacto'>Contacto</a></li>
                </ul>

            </nav >

        </>

    )
}
