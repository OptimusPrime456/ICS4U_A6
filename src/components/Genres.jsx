import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import './Genres.css'

function Genres() {
	const [genres, setGenres] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		(async function getGenres() {
			const response = await axios.get(
				`https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_TMDB_KEY}`
			);
			setGenres(response.data.genres);
            console.log(response.data.genres);
		})();
	}, []);

	function loadGenre(id){
        navigate(`genre/${id}`);
    }

    function refreshPage(){ 
        window.location.reload(); 
    }

	return (
        <div className="genre-container">
            <ol className="genre-list">
                {genres.slice(0, 20).map((genre) => (
                    <ul key={genre.id} className="genre" onClick={() => {loadGenre(genre.id), refreshPage()}}>  
                        {genre.name}
                    </ul>
                ))}
            </ol>
        </div>
    )
}

export default Genres