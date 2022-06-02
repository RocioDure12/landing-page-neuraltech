import styles from '../styles/clientes.module.scss';

const Clientes = ({ }) => {

    return (

        <div id="clientes" className={styles.clientes}>
            <h2 className={styles.h2}>Nuestros clientes</h2>

            <div className={styles.container}>
                <div className={styles["container-img"]}>
                    <img src="images/armaselektronik.jpg"></img>
                </div>

                <div className={styles["container-img"]}>
                    <img src="images/bioceanica.jpg"></img>
                </div>

                <div className={styles["container-img"]}>
                    <img src="images/saimaseguridad.jpg"></img>
                </div>

                <div className={styles["container-img"]}>
                    <img src="images/servicampo.jpeg"></img>
                </div>

                <div className={styles["container-img"]}>
                    <img src="images/trafficsolutions.jpeg"></img>
                </div>
            </div>


        </div>
    )
}

Clientes.displayName = 'Clientes'

export default Clientes