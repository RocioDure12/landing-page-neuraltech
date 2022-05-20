import styles from '../styles/navbar.module.scss';
export default () => {

    return (
        <nav className={styles["nav-bar"]}>
            <ul>
                <li><img alt="logo" src='images/logo.jpeg'/></li>
                <li><a href='#servicios'>Servicios</a></li>
                <li><a href="#certificaciones">Certificaciones</a></li>
                <li><a href='#clientes'>Clientes</a></li>
                <li><a href='#nosotros'>Nosotros</a></li>
                <li><a href='#contacto'>Contacto</a></li>
            </ul>

        </nav >
    )
}