import styles from './Resultado.module.css';

export function Resultado({ src, username, text }) { // Recebemos as props corretamente
  return (
    <div className={styles.resultadoContainer}>
      <div className={styles.imagemContainer}>
        <img src={src} alt={`Avatar de ${username}`} />
      </div>
      <div className={styles.textoContainer}>
        <h1>{username}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
}