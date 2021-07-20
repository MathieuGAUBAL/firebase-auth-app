import './App.css';
import React, { useState } from 'react';
import Formulaire from './components/Formulaire';
import NavBar from './components/NavBar';
import Playlist from './components/Playlist';

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <div className="App">
      { 
        !auth 
        ? 
          <Formulaire setAuth={setAuth}/>
        :
          <>
            <NavBar setAuth={setAuth}/>
            <Playlist />
          </>
      }
    </div>
  );
}

export default App;
