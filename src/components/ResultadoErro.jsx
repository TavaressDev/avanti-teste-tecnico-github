import styles from './ResultadoErro.module.css'

export function ResultadoErro(){
    return(
        <div className={styles.erroContainer}>
            <p>Nenhum perfil foi encontrado com esse nome de usuário. <br />
            Tente novamente</p>
        </div>
    )
}