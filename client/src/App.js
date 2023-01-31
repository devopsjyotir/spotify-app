import { useState ,useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { access_token } from './Spotify';

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
            <h1>Logged In</h1>
       )}
      </header>
    </div>
  );
}

export default App;

