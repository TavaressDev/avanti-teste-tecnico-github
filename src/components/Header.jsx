import logo from '../assets/logoGitHub.svg'
import styles from './Header.module.css'

export function Header(){
    return(
        <header className={styles.headerContainer}>
            <img src={logo} alt="" />
            <h1>Perfil <strong>GitHub</strong></h1>
            
        </header>
    )
}