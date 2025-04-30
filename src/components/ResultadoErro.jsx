import styles from './ResultadoErro.module.css'

export function ResultadoErro(){
    return(
        <div className={styles.erroContainer}>
            <p>Nenhum perfil foi encontrado com ese nome de usuário. <br />
            Tente novamente</p>
        </div>
    )
}