import styles from '../styles/clientes.module.scss';

export default ({ }) => {

    return (

        <div className={styles.clientes}>
            <h2 id="clientes" className={styles.h2}>Nuestros clientes</h2>

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