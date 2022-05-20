import styles from '../styles/form.module.scss';
export default () => {

    return (
        <div  className={styles["container-form"]}>
        <form id="contacto" action="/send-data-here" method="post" className={styles.form}>
            <h2>Contacto</h2>
            <label for="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" />
            <label for="asunto">Asunto</label>
            <input type="text" id="asunto" name="asunto" />
            <label for="mensaje">Mensaje</label>
            <input name="mensaje" id="mensaje" cols="30" rows="10" placeholder="Escriba su mensaje aqui"
                aria-label="mensaje"/>
            <button type="submit">Enviar</button>
        </form>
        </div>
    )
}