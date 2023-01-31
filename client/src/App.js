import { useState ,useEffect } from 'react';
import './App.css';
import { accessToken, logout, getCurrentUserProfile } from './Spotify';
import { catchErrors } from './utils';

function App() {

const [token, setToken] = useState(null)
const [profile, setProfile] = useState(null)

  //useEffect to store the tokens in the react app and fetch data
 useEffect(() => {
setToken(accessToken)

const fetchData = async () => {

    const { data } = await getCurrentUserProfile()
    setProfile(data)
    console.log(data)

}
catchErrors(fetchData())

 }, [])


 return (
  <div className="App">
    <header className="App-header">
      {!token ? (
        <a className="App-link" href="http://localhost:8888/login">
          Log in to Spotify
        </a>
      ) : (
        <>
          <button onClick={logout}>Log Out</button>

          {profile && (
            <div>
              <h1>{profile.display_name}</h1>
              <h2>{profile.product}</h2>
              <h2>{profile.country}</h2>
              <p>{profile.followers.total} Followers</p>
              {profile.images.length && profile.images[0].url && (
                <img src={profile.images[0].url} alt="Avatar"/>
              )}
            </div>
          )}
        </>
      )}
    </header>
  </div>
);
}

export default App;

