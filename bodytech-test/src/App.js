import Login from './modules/auth/Auth';
import "bootstrap/dist/css/bootstrap.min.css"
import Dashboard from './modules/landing/SearchBar';
import { getToken } from './modules/auth/token'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_USER, selectUser } from './features/UserSlice';
import { selectToken, SET_TOKEN } from './features/TokenSlice';
import SpotifyWebApi from "spotify-web-api-js"

const spotifyApi = new SpotifyWebApi()

function App() {
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const { access_token } = getToken();

    if (access_token) {
      dispatch(SET_TOKEN(access_token))
      spotifyApi.setAccessToken(access_token);
      spotifyApi.getMe().then((user) => dispatch(SET_USER(user)));
      window.history.pushState({}, null, "/")
    }

  }, [dispatch]);

  return (
    <div className="App">

      {user ? <Dashboard token={token} /> : <Login />}

    </div >
  );
}

export default App;
