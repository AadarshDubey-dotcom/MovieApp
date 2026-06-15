import { createContext, useState, useContext, useEffect } from "react";

const MoviesContext = createContext();

export const useMovieContext = () => useContext(MoviesContext);
export const MoviesProvider = ({ children }) => {
const [favoriteMovies, setFavoriteMovies] = useState([]);

useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");

    if(storedFavs) setFavoriteMovies(JSON.parse(storedFavs));
}, []);

useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoriteMovies));
}, [favoriteMovies]);

const addToFavorites = (movie) => {
    setFavoriteMovies((prevFavs) => [...prevFavs, movie]);
};

const removeFromFavorites = (movieId) => {
    setFavoriteMovies((prevFavs) => prevFavs.filter(movie => movie.id !== movieId));
};

const isFavorite = (movieId) => {
    return favoriteMovies.some(movie => movie.id === movieId);
};

const value = {
    favorites: favoriteMovies,
    addToFavorites,
    removeFromFavorites,
    isFavorite
}


    return <MoviesContext.Provider value={value}>
        {children}
    </MoviesContext.Provider>
}