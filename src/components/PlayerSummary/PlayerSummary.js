import styles from './styles.module.css';
import { Bar } from 'components';

const red = '#821200';
const blue = '#1953cb';

export const PlayerSummary = ({ main = false, name, level, health, macHealth }) => {
    return <div 
    style={{backgroundColor: main ? red : blue }} 
    className={styles.main}
    >
        <div className={styles.info}>
            <div className={styles.name}>{name}</div>
            <div className={styles.level}>Lvl: {level}</div>
        </div>

        <div className={styles.health}>
            <Bar label="HP" value={health} />
        </div>
    </div>

};