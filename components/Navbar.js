import styles from '../styles/navbar.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faBars,
    faXmark
} from "@fortawesome/free-solid-svg-icons";

import React, { useState } from 'react';



export default () => {

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const [menuVisible, setMenuVisible] = useState(false);

    return (

        <>
            <div className={styles.appbar}>
                <div onClick={toggleMenu}><FontAwesomeIcon icon={faBars} /></div>
                <div><img alt="logo" src='images/neuraltech.png' /></div>
            </div>
           
            <nav className={styles.menu} style={{ display: menuVisible ? 'block' : 'none' }}>
               
                <ul>
                    <li><a onClick={toggleMenu} href='#servicios'>Servicios</a></li>
                    <li><a onClick={toggleMenu} href="#certificaciones">Certificaciones</a></li>
                    <li><a onClick={toggleMenu} href='#clientes'>Clientes</a></li>
                    <li><a onClick={toggleMenu} href='#contacto'>Contacto</a></li>
                </ul>
                <div className={styles["close-button"]} onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
            </nav>

            <nav className={styles["nav-bar"]}>
                <div><img alt="logo" src='images/neuraltech.png' /></div>
                <ul>
                    <li><a href='#servicios'>Servicios</a></li>
                    <li><a href="#certificaciones">Certificaciones</a></li>
                    <li><a href='#clientes'>Clientes</a></li>
                    <li><a href='#contacto'>Contacto</a></li>
                </ul>

            </nav >

        </>

    )
}
