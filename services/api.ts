export const TMDB_CONFIG = 
{
    BASE_URL : 'https://api.themoviedb.org/3',
    API_KEY : process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers :
    {
        accept: 'application/json',
        Authorization : `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }
}


export const fetchMovies = async({query}: {query:string})=>{
    const endpoint = query ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`: `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

    const response = await fetch(endpoint,
        {
            method:'GET',
            headers:TMDB_CONFIG.headers,

        }
    );

    if(!response.ok)
{
        throw new Error(`Failed to Fetch Movies ${response.statusText}`);
    }
}


// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjgyMzJjZWNlNDA0MTZmN2MxYzg2NWNjOTcxYjJhZCIsIm5iZiI6MTc2NzA3OTk3MS4yOTYsInN1YiI6IjY5NTM4MDIzYjhhNDAyNzMyZjdjNzk5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uoKzOhvka54jqicqPsK-Z1C6wqzOPuN_pHxni7u30k0'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));