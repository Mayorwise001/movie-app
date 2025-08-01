
import React, {useState} from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import axios from "axios"
import './styles.css';

function Main(){
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false);

    const fetchMovies = async (query) =>{
        setLoading(true);

        try{
            const response = await axios.get(`https://www.omdbapi.com/?s=${query}&apikey=b451c0f3`);
            setMovies(response.data.Search || []);
        }catch (error){
            console.error("Error fetching movies:", error)
        }
        setLoading(false)
    };

    return (
        <div className="app">
            <h1>Movie Search App</h1>
            <SearchBar onSearch={fetchMovies}/>
            {loading? <p>Loading...</p>:<MovieList movies={movies}/>}
        </div>
    )
}

export default Main;