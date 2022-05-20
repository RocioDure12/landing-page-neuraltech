import styles from '../styles/Hero.module.scss';
export default () => {

    return (
        <div className={styles["hero-image"]}>
            <div className={styles["hero-text"]}>
                <h2 className={styles.h2}>Neuraltech es tu aliado en soluciones de seguridad vial</h2>
            </div>
        </div>
    )
}