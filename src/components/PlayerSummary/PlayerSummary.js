import styles from './styles.module.css';

const red = '#821200';
const blue = '#153cb';

export const PlayerSummary = ({ main = false }) => {
    return <div style={{backgroundColor: main ? red : blue }} className={styles.main}>Player Summary Component</div>

};