import styles from '../styles/nosotros.module.scss';
export default () => {

    return (
        <div id="nosotros" className={styles.container}>
            <div className={styles.info}>
                <p>Neuraltech S.A
                    Es una empresa de desarrollo de software de seguridad vial que  brinda el equipamiento necesario con el objetivo de ampliar nuestra oferta de productos e incorporar nuevas tecnologías para brindar un servicio eficiente con los estándares más altos acordes a la demanda de un sector exigente como el de la seguridad vial.
                </p>
                </div>
                <div className={styles["container-img"]}>
                <img src='images/aboutUs.svg'/>
                </div>
          
        </div>
    )
}