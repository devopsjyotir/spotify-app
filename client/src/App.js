import { useState ,useEffect } from 'react';
import './App.css';
import { access_token, logout } from './Spotify';

function App() {

const [token, setToken] = useState(null)

  //useEffect to store the tokens in the react app
 useEffect(() => {
setToken(access_token)

 }, [])


  return (
    <div className="App">
      <header className="App-header">
       { !token ? (
        <a
          className="App-link"
          href="http://localhost:8888/login"
         
        >
         Login to spotify
        </a>
       ) : (
        <>
            <h1>Logged In</h1>
            <button onClick={logout}>Log Out</button>
            </>
       )}
      </header>
    </div>
  );
}

export default App;

