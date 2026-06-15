import React from 'react'
import "../css/Favorites.css"
import { useMovieContext } from '../Context/MovieContext'
import MovieCard from '../Component/MovieCard'

function Favorites() {
const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
         {favorites
            .map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
      </div>
    )
  } 
    return (
      <div className="favorites-empty">
        <h2>No favorites yet</h2>
        <p>Add some favorite items to see them here.</p>
      </div>
    )
  
    }

export default Favorites