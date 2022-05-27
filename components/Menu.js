import styles from '../styles/menu.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faBars
} from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
    return (
        <nav className={styles.menu}>
            <label for="menu" type="checkbox" id='menu'></label>
            <ul>
                <li className={styles["menu-item"]}><a href='#servicios'>Servicios</a></li>
                <li className={styles["menu-item"]}><a href="#certificaciones">Certificaciones</a></li>
                <li className={styles["menu-item"]}><a href='#clientes'>Clientes</a></li>
                <li className={styles["menu-item"]}><a href='#contacto'>Contacto</a></li>
            </ul>
        </nav>

    )
}

export default Menu;