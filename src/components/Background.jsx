import styles from './Background.module.css';
import ellipse1 from '../assets/Ellipse1.svg';
import ellipse2 from '../assets/Ellipse2.svg';
import camada from '../assets/Camada1.svg'
import { Home } from './Home';

export function Background({ children }) { 
    return (
        <div className={styles.wrapper}>
            <img src={camada} className={styles.camadaContainer} alt='Camada de background' />
            <img className={styles.ellipse2Container} src={ellipse2} alt="Ellipse de background" />
            <img className={styles.ellipse1Container} src={ellipse1} alt="Ellipse de background" />
            {children} {Home}
        </div>
    );
}