import styles from '../styles/clientes.module.scss';

export default ({ }) => {

    return (
        <>
        <h2 id="clientes" className={styles.h2}>Nuestros clientes</h2>
        <div  className={styles.sponsors}>
            <div className={styles.container}>
                <img src="images/armaselektronik.jpg"></img>
                <img src="images/bioceanica.jpg"></img>
                <img src="images/saimaseguridad.jpg"></img>
                <img src="images/servicampo.jpeg"></img>
                <img src="images/trafficsolutions.jpeg"></img>
            </div>


        </div>
        </>


    )
}