import React from "react";

function MovieList({movies}){
    return(
        <div className="movie-list">
            {movies.length === 0?(
                <p>No movies found.</p>
            ):(
                movies.map((movie)=>(
                    <div key={movie.imdbID} className="movie-card">
                        <img src={movie.Poster} alt={movie.Title} />
                        <h3>{movie.Title}</h3>
                        <p>{movie.Year}</p>
                        </div>
                ))
            )}
        </div>
    )
}

export default MovieList;