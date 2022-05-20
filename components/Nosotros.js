import styles from '../styles/nosotros.module.scss';
export default () => {

    return (
        <div className={styles.container}>
            <div className={styles["container-info"]}>
                <h3>hola amiga negra</h3>
                <p>Neuraltech S.A
                    es una empresa de desarrollo de software de seguridad vial y brinda el equipamiento necesario.Nuestro objetivo es ampliar nuestra oferta de productos e incorporar nuevas tecnologías para brindar un servicio eficiente con los estándares más altos acordes a la demanda de un sector exigente como el de la seguridad vial.
                </p>
            </div>

            <div className={styles["container-img"]}>
                <img src="images/working.svg"/>
            </div>
        </div>
    )
}