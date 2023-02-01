import { useState ,useEffect } from 'react';

import styled, { createGlobalStyle } from 'styled-components/macro';
import { accessToken, logout, getCurrentUserProfile } from './Spotify';
import { catchErrors } from './utils';
// import TopArtists from './TopArtists';

// import TopTracks from './TopTracks';
// import Playlists from './Playlists';
// import PlaylistsId from './PlaylistsId';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from 'react-router-dom';


const GlobalStyle = createGlobalStyle`
:root {
  --black: #121212;
  --green: #1db954;
  --white: #ffffff;

  --font: 'Circular std', -apple-system, BlinkMacSystemFont,
  system-ui, sans-serif
}

html {
  box-sizing: border-box;

}

*,
*::before,
*::after{
  box-sizing: inherit;
}

body {
  margin: 0;
  padding: 0;
  background-color: black;
  color: white;
}
`


const StyledLoginButton = styled.a`
background-color: var(--green);
color: var(--white);
padding: 10px 20px;
margin: 20px auto;
border-radius: 30px;
display: inline-block;
`

// Scroll to top of page when changing routes
// https://reactrouter.com/web/guides/scroll-restoration/scroll-to-top
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [token, setToken] = useState(null);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setToken(accessToken);

    const fetchData = async () => {
      const { data } = await getCurrentUserProfile();
      setProfile(data);
    };

    catchErrors(fetchData());
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <header className="App-header">
        {!token ? (
           <StyledLoginButton href="http://localhost:8888/login">
           Log in to Spotify
         </StyledLoginButton>
       ) : (
         <Router>
          <ScrollToTop />
           <Switch>
             <Route path="/top-artists">
               <h1>Top Artists</h1>
             </Route>
             <Route path="/top-tracks">
               <h1>Top Tracks</h1>
             </Route>
             <Route path="/playlists/:id">
               <h1>Playlist</h1>
             </Route>
             <Route path="/playlists">
               <h1>Playlists</h1>
             </Route>
             <Route path="/">
               <>
                 <button onClick={logout}>Log Out</button>
       
                 {profile && (
                   <div>
                     <h1>{profile.display_name}</h1>
                     <p>{profile.followers.total} Followers</p>
                     {profile.images.length && profile.images[0].url && (
                       <img src={profile.images[0].url} alt="Avatar"/>
                     )}
                   </div>
                 )}
               </>
             </Route>
           </Switch>
         </Router>
       )}
      </header>
    </div>
  );
}

export default App;
