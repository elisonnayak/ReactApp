export const getMovieDetails = async () =>{
    const response = await fetch(`http://localhost:8080/movies/allMovies`);
    const data =  await response.json();
    return data;
};

export const findMovie = async (query) =>{
    const response = await fetch(`http://localhost:8080/movies/searchMovie?query=${query}`);
    const data =  await response.json();
    return data;
};