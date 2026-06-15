import React ,{useState, useEffect} from 'react'
import MovieCard from "../Component/MovieCard"
import { searchMovies, getPopularMovies } from '../Services/api'
import NavBar from '../Component/NavBar'
import "../css/Home.css"

function Home() {

    const [searchQuery, setSearchQuery] = useState("");

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const popularMovies = await getPopularMovies();
            setMovies(popularMovies);
        };
        fetchMovies();
    }, []);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return;
        if (loading) return;

        setLoading(true);
        setError("");

        try {
            const searchResults = await searchMovies(searchQuery);
            setMovies(searchResults);
        } catch (err) {
            setError("Failed to search movies. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

  return (
    <>
    <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input
                type="text"
                placeholder="Search movies..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="search-button" type='submit'>Search</button>
        </form>
        <div className="movies-grid">
         {movies
            .filter((m) => m.title.toLowerCase().includes(searchQuery.toLowerCase()))
            .map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
   </div>
   </>
  )
}

export default Home;
