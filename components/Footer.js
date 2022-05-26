import styles from '../styles/footer.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import {
    faFacebook, faInstagram, faLinkedin
} from "@fortawesome/free-brands-svg-icons";

export default () => {

    return (
        <footer className={styles.footer}>
            <div className='icon-container'>
                <a href='https://www.facebook.com/EmpresaNeuralTech'><FontAwesomeIcon className={styles.icono} icon={faFacebook} /></a>
                <a href="https://www.instagram.com/neuraltech_s.a"><FontAwesomeIcon className={styles.icono} icon={faInstagram} /></a>
                <a href='https://www.linkedin.com/company/neuraltech'><FontAwesomeIcon className={styles.icono} icon={faLinkedin} /></a>
            </div>
        </footer>
    )
}