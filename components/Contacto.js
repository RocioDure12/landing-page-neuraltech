import styles from '../styles/contacto.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState } from 'react';

import {
    faFacebook, faInstagram, faLinkedin
} from "@fortawesome/free-brands-svg-icons"

import {
    faEnvelope
} from "@fortawesome/free-solid-svg-icons";


export default ({ }) => {
    const [nombre, setNombre] = useState();
    const [asunto, setAsunto] = useState();
    const [mensaje, setMensaje] = useState();

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(nombre)
        location.href = `https://api.whatsapp.com/send?phone=3434567683&text=*Nombre*: ${nombre}%0a*Consulta:* ${asunto}%0a*Descripcion:* ${mensaje} `


    }

    const handleChangeNombre = (e) => {
        setNombre(e.target.value)
    }

    const handleChangeAsunto = (e) => {
        setAsunto(e.target.value)
    }
    const handleChangeMensaje = (e) => {
        setMensaje(e.target.value)
    }



    return (
        <div id="contacto" className={styles.contacto}>
            <div className={styles.container}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <h3>Contacto</h3>
                    <label for="fname">Nombre</label>
                    <input required type="text" onChange={handleChangeNombre} placeholder="Tu nombre.." />

                    <label for="asunto">Asunto</label>
                    <input required type="text" onChange={handleChangeAsunto} placeholder="Asunto.." />

                    <label for="mensaje">Mensaje</label>
                    <textarea required onChange={handleChangeMensaje} cols="20" rows="10" placeholder="Escriba su mensaje aqui" aria-label="mensaje" />

                    <button type="submit" className={styles["boton-enviar"]} >Enviar</button>
                </form>

                <div className={styles.aside}>
                    <h3>Redes</h3>
                    <p><FontAwesomeIcon className={styles.icono} icon={faEnvelope} /> contacto@neuraltech.com</p>
                    <a href='https://www.facebook.com/EmpresaNeuralTech'><FontAwesomeIcon className={styles.icono} icon={faFacebook} /> Facebook</a>
                    <a href="https://www.instagram.com/neuraltech_s.a"><FontAwesomeIcon className={styles.icono} icon={faInstagram} /> Instagram</a>
                    <a href='https://www.linkedin.com/company/neuraltech'><FontAwesomeIcon className={styles.icono} icon={faLinkedin} /> LinkedIn</a>
                </div>
            </div>

        </div>
    )
}