import styles from './styles.module.css';
import { PlayerSummary } from 'components';

export const BattleMenu = ({ onStartClick }) => {
  return (
  <div className={styles.main}>
    <div className={styles.opponent}>
      <div className={styles.summary}>
        <PlayerSummary main={false}/>
      </div>
    </div>
    <button className={styles.opponent} onClick={onStartClick}>
      Start Game
    </button>
  </div>
  );
}