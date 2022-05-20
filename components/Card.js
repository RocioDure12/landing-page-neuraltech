import styles from '../styles/card.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"



export default ({ icon, title, description }) => {

    return (
        <div className={styles.card}>

            <div className={styles.container}>
                <FontAwesomeIcon className={styles.icono}
                    icon={icon}
                    style={{ fontSize: 50 }}
                />
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>


    )
}