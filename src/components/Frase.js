import styles from './Frase.module.css';

function Frase() {
    return (
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>Sou uma frase que foi importada no HelloWorld que, foi importada no App</p>
        </div>
    );
}

export default Frase;