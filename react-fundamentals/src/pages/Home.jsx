import Movie from "../components/Movie";
import { useState, useEffect } from "react";
import { getMovieDetails, findMovie} from "../services/api";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() =>{
        const loadPopularMovies = async ()=>{
            try{
                const popularMovies = await getMovieDetails();
                setMovies(popularMovies);
            }catch(err){
                console.log(err);
                setError("Failed to load movies...");
            }finally {
                setLoading(false);
            }
        };
        loadPopularMovies();
    },[]);

     /*const movies = [
        { id: 1, title: "John Wick", release_date: 2020 },
        { id: 2, title: "Terminator", release_date: 2020 },
        { id: 3, title: "Saving private ryan", release_date: 2020 },
    ];*/

    const searchMovie = async (e) => {
        e.preventDefault();
        if(!searchQuery.trim()) return;
        if(loading) return;
        setLoading(true);
        try{
            const movie = await findMovie(searchQuery);
            setMovies(movie);
            setError(null);
        }catch(err){
            console.log(err);
            setError("Failed to load movies...");
        }finally {
            setLoading(false);
        }
    };

    return (
        <div className="home">
            <form onSubmit={searchMovie} className="search-form">
                <input type="text" placeholder="Search" className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} />
                <button type="submit" className="search-btn">Search</button>
            </form>
            <div className="movies-grid">
                {movies.map(movie => {
                    return movie.title.toLowerCase().startsWith(searchQuery) && <Movie movie={movie} key={movie.id} />
                })}
            </div>
        </div>
    );
}

export default Home;