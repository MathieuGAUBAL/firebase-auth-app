import './App.css';
import Formulaire from './components/Formulaire';
import NavBar from './components/NavBar';
import Playlist from './components/Playlist';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Formulaire />
      <Playlist />
    </div>
  );
}

export default App;
