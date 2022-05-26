import styles from '../styles/contacto.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faFacebook, faInstagram, faLinkedin
} from "@fortawesome/free-brands-svg-icons"

import {
    faEnvelope
} from "@fortawesome/free-solid-svg-icons";


export default ({ }) => {
    return (
        <div id="contacto" className={styles.contacto}>
            <div className={styles.container}>
                <form action="" className={styles.form}>
                    <h3>Contacto</h3>
                    <label for="fname">Nombre</label>
                    <input type="text" id="nombre" name="nombre" placeholder="Tu nombre.." />

                    <label for="asunto">Asunto</label>
                    <input type="text" id="asunto" name="asunto" placeholder="consulta.." />

                    <label for="mensaje">Mensaje</label>
                    <textarea name="mensaje" id="mensaje" cols="20" rows="10" placeholder="Escriba su mensaje aqui" aria-label="mensaje" />

                    <button type="submit">Enviar</button>
                </form>

                <div className={styles.aside}>
                    <h3>Redes</h3>
                    <p><FontAwesomeIcon className={styles.icono} icon={faEnvelope} /> contacto@neuraltech.com</p>
                    <a href='https://www.facebook.com/EmpresaNeuralTech'><FontAwesomeIcon className={styles.icono} icon={faFacebook} />Facebook</a>
                    <a href="https://www.instagram.com/neuraltech_s.a"><FontAwesomeIcon className={styles.icono} icon={faInstagram} />Instagram</a>
                    <a href='https://www.linkedin.com/company/neuraltech'><FontAwesomeIcon className={styles.icono} icon={faLinkedin} />LinkedIn</a>
                </div>
            </div>

        </div>
    )
}