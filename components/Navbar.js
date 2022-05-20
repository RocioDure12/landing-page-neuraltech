import styles from '../styles/navbar.module.scss';
export default () => {

    return (
        <nav className={styles["nav-bar"]}>
            <ul>
                <li><a href=''>Servicios</a></li>
                <li><a href='' >Productos</a></li>
                <li><a href=''>Certificaciones</a></li>
                <li><a href=''>Sponsors</a></li>
                <li><a href=''>Contacto</a></li>
            </ul>

        </nav >
    )
}