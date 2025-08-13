// TMDB CONFIG WHICH CAN BE CHANGED AND REUSABLE
export const TMDB_CONFIG = {
        BASE_URL: 'https://api.themoviedb.org/3',
        API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
        headers: {
            accept: 'application/json',
            authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_KEY}`,
        }
}

export const fetchMovies = async ({query} : {query:string}) => {

    const endpoint = query ?
        `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}` :
        `${TMDB_CONFIG.BASE_URL}/discover/movie?include_adult=true&sort_by=popularity.desc`;

    const response = await fetch(endpoint, {
        method: 'GET',
        headers: TMDB_CONFIG.headers,
    });

    if (response.ok) {
        const result = await response.json();
        return result.results;
    } else {
        throw new Error(`Error in fetching movies data: ${response.statusText}`)
    }
}