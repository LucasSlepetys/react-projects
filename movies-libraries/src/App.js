import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=d26fd309';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const SearchMovies = () => {
    return (
      <div className='search'>
        <input
          key='text'
          placeholder='Search for movies'
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <img
          src={SearchIcon}
          alt='search'
          onClick={() => {
            searchMovies(searchTerm);
          }}
        />
      </div>
    );
  };

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies('');
  }, []);

  return (
    <div className='app'>
      <h1>MovieLand</h1>
      <SearchMovies />
      {movies?.length > 0 ? (
        <div className='container'>
          {movies.map((movie) => (
            <MovieCard
              Year={movie.Year}
              Poster={movie.Poster}
              Type={movie.Type}
              Title={movie.Title}
            />
          ))}
        </div>
      ) : (
        <div className='empty'>
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
