import styles from '../styles/cardProducto.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default ({ icon, title, description }) => {

    return (

        <div className={styles.container}>

            <div className={styles.card}>

                <div className={styles["column-left"]}>
                    <FontAwesomeIcon className={styles.icono}
                        icon={icon}
                        style={{ fontSize: 50 }}
                    />
                </div>

                <div className={styles["column-right"]}>
                    <div>
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}