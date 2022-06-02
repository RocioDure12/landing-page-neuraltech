import styles from '../styles/clientes.module.scss';
import Image from 'next/image'

const Clientes = ({ }) => {

    return (

        <div id="clientes" className={styles.clientes}>
            <h2 className={styles.h2}>Nuestros clientes</h2>

            <div className={styles.container}>
                <div className={styles["container-img"]}>
                    <img src="images/armaselektronik.jpg" />
                </div>

                <div className={styles["container-img"]}>
                    <img src="images/bioceanica.jpg"/>
                </div>

                <div className={styles["container-img"]}>
                    <img src="images/saimaseguridad.jpg" />
                </div>

                <div className={styles["container-img"]}>
                    <img src="images/servicampo.jpeg"/>
                </div>

                <div className={styles["container-img"]}>
                    <img src="/images/trafficsolutions.jpeg" />
                </div>
            </div>


        </div>
    )
}

Clientes.displayName = 'Clientes'

export default Clientes