import styles from '../styles/footer.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import {
    faFacebook, faInstagram, faLinkedin
} from "@fortawesome/free-brands-svg-icons";

import {
    faEnvelope
} from "@fortawesome/free-solid-svg-icons";


export default () => {

    return (
        <footer className={styles.footer}>
            <div className='icon-container'>
                <a href=''><FontAwesomeIcon className={styles.icono} icon={faFacebook} /></a>
                <a href=""><FontAwesomeIcon className={styles.icono} icon={faInstagram} /></a>
                <a href=''><FontAwesomeIcon className={styles.icono} icon={faLinkedin} /></a>
                <a href=''><FontAwesomeIcon className={styles.icono} icon={faEnvelope} /></a>

            </div>
        </footer>
    )
}