import axios from "axios";
import './Feature.css'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Feature() {
    const navigate = useNavigate();
    const [movies, setMovies] = useState([]);
    const [shuffledMovies, setShuffledMovies] = useState([]);
    const [clickCount, setClickCount] = useState(0);
    const [currentTransform, setCurrentTransform] = useState(0);

    useEffect(() => {
        (async function getMovies() {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_KEY}`
            );
            setMovies(response.data.results);
            setShuffledMovies(shuffle(response.data.results));
        })();
    }, []);

    function loadMovie(id) {
        navigate(`/movies/details/${id}`);
    }

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function shift() {
        let ratio = Math.floor(((window.innerWidth) - 60) / 440);

        if (20 - (3 + clickCount) + (3 - ratio) >= 0) {
            const newTransform = currentTransform - 440;
            setCurrentTransform(newTransform);
            setClickCount(clickCount + 1);
        } else {
            setCurrentTransform(0);
            setClickCount(0);
        }
    };

    return (
        <div>
            <div className="movie-list-container">
                <h1 className="movie-list-title">Now Playing</h1>
                <div className="movie-list-wrapper">
                    <div className="movie-list" style={{ transform: `translateX(${currentTransform}px)` }}>
                        {shuffledMovies.map((movie, index) => (
                            <div className="movie-list-item" key={index}>
                                <img className="movie-list-item-image" src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}/>
                                <span className="movie-list-item-title">{movie.original_title}</span>
                                <p className="movie-list-item-desc">{movie.overview}</p>
                                <button className="movie-list-item-button" onClick={() => { loadMovie(movie.id) }}>Details</button>
                                <button className="movie-list-item-button rent">Rent</button>
                            </div>
                        ))}
                    </div>
                    <i className="fa-solid fa-chevron-right arrow" onClick={() => shift()}></i>
                </div>
            </div>
        </div>
    )
}


export default Feature