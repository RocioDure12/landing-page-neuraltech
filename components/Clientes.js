import styles from '../styles/clientes.module.scss';
import Image from 'next/image'

const Clientes = ({ }) => {

    return (

        <div id="clientes" className={styles.clientes}>
            <h2 className={styles.h2}>Nuestros clientes</h2>

            <div className={styles.container}>
                <div className={styles["container-img"]}>
                    <Image src="/images/armaselektronik.jpg" width='100%' height='100%' objectFit='contain'/>
                </div>

                <div className={styles["container-img"]}>
                    <Image src="/images/bioceanica.jpg" width='100%' height='100%' objectFit='contain' />
                </div>

                <div className={styles["container-img"]}>
                    <Image src="/images/saimaseguridad.jpg" width='100%' height='100%' objectFit='contain' />
                </div>

                <div className={styles["container-img"]}>
                    <Image src="/images/servicampo.jpeg" width='100%' height='100%' objectFit='contain'/>
                </div>

                <div className={styles["container-img"]}>
                    <Image src="/images/trafficsolutions.jpeg" width='100%' height='100%' objectFit='contain'/>
                </div>
            </div>


        </div>
    )
}

Clientes.displayName = 'Clientes'

export default Clientes