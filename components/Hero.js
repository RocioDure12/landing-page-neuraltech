import styles from '../styles/Hero.module.scss';
export default () => {

    return (
        <div className={styles["hero-image"]}>
            <div className={styles["hero-text"]}>
                <p className={styles.h2}>Neuraltech es tu aliado en soluciones de seguridad vial</p>
            </div>
        </div>
    )
}