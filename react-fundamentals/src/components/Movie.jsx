import '../assets/css/movie.css';

function Movie({movie}) {
    function onFavClick(){
        alert("clicked");
    }

    return (
        <div className="movie-card">
                <div className="movie-poster">
                    <img src={movie.url} alt={movie.title}></img>
                    <div>
                        <button className="fav-button" onClick={onFavClick}>
                            Like
                        </button>
                    </div>
                </div>
                <div className="movie-info">
                    <h3>{movie.title}</h3>
                    <p>{movie.releaseDate}</p>
                </div>
        </div>
    );
}

export default Movie;