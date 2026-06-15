const API_KEY = "8e77d74c067fad16e6685458d930aac8";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    const respone = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await respone.json();
    return data.results;
};

export const searchMovies = async (query) => {
    const respone = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeYRLComponent(query)}`);
    const data = await respone.json();
    return data.results;
};