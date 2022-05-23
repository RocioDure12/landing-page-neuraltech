import styles from '../styles/layout.module.scss';

export default ({children}) => {

    return (
        <div className={styles.container}>
            {children}
        </div>


    )
}