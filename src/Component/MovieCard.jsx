import React from 'react'
import  "../CSS/MovieCard.css"
import { useMovieContext } from '../Context/MovieContext'

function MovieCard({movie}) {
    const { addToFavorites, removeFromFavorites, isFavorite } = useMovieContext();

    function onFavoriteClick(movie){
        if (isFavorite(movie.id)) {
            removeFromFavorites(movie.id);
        } else {
            addToFavorites(movie);
        }
    }

  return (
    <>
      <div className='movie-card'>
        <div className="movies-poster">
            <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "path/to/default/image.jpg"} alt={movie.title} />
            <div className="movies-overlay">
                <button className="favorite-btn" onClick={() => onFavoriteClick(movie)}>🤍</button>
            </div>
        </div>
        <div className="movies-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
        </div>
      </div>
    </>
  )
}

export default MovieCard;