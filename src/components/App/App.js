import { StartMenu } from 'components';
import styles from './styles.modules.css';
import { useState } from 'react';

export const App = () => {

  const [mode, setMode] = useState('start');

  return <div className={styles.main}>
    {mode === 'start' && <StartMenu/>}

    {mode === 'battle' && <>Battle Mode</>}

    {mode === 'gameOver' && <>Game Over</>}

  </div>
    
};