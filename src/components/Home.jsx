import { useState } from 'react'; 
import { Header } from './Header';
import styles from './Home.module.css';
import { Input } from './Input';
import { Resultado } from './Resultado';
import { ResultadoErro } from './ResultadoErro';

export function Home() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(false);

  const buscarUsuario = async (username) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      
      if (response.ok) {
        const data = await response.json();
        setUserData(data);
        setError(false); 
      } else { 
        setUserData(null); 
        setError(true);
      }
    } catch (err) {
      setUserData(null);
      setError(true);
    }
  };

  return (
    <div className={styles.homeContainer}>
      <Header />
      <Input onSearch={buscarUsuario} />
      
      {}
      {userData && <Resultado 
        src={userData.avatar_url} 
        username={userData.name || userData.login} 
        text={userData.bio || "Este usuário não possui biografia."} 
      />}
      
      {error && <ResultadoErro />}
    </div>
  );
}