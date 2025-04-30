import styles from './Background.module.css';
import ellipse1 from '../assets/Ellipse1.svg';
import ellipse2 from '../assets/Ellipse2.svg';
import { Home } from './Home';

export function Background({ children }) { 
    return (
        <div className={styles.wrapper}>
            <img className={styles.x} src={ellipse2} alt="" />
            <img className={styles.y} src={ellipse1} alt="" />
            {children} {Home}
        </div>
    );
}