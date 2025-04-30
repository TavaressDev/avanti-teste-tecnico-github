import { useState } from 'react';
import styles from './Input.module.css';
import lupa from '../assets/lupa.svg';

export function Input({ onSearch }) { 
  const [username, setUsername] = useState('');

  const handleSearch = () => {
    if (username.trim()) { 
      onSearch(username);
    }
  };

  return (
    <div className={styles.inputContainer}>
      <input 
        className={styles.input} 
        type="text" 
        placeholder="Digite um usuário do Github" 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSearch()} 
      />
      <button className={styles.botao} onClick={handleSearch}>
        <img className={styles.lupa} src={lupa} alt="" />
      </button>
    </div>
  );
}