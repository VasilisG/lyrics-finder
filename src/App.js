import './App.css';
import SearchBar from './components/SearchBar';
import Results from './components/Results';
import Lyrics from './components/Lyrics';

const App = () => {
  return (
    <div className='app-container bg-zinc-950 w-full h-full min-w-screen min-h-screen'>
      <h1 className='app-title text-center text-white text-4xl p-4 block'>Lyrics Finder</h1>
      <div className='searchbar-container mt-4 mb-8 flex justify-center'>
        <SearchBar/>
      </div>
      <div className='main-app-container xl:flex sm:flex-column justify-center gap-4 px-4'>
        <Results/>
        <Lyrics/>
      </div>
    </div>
  );
}

export default App;
