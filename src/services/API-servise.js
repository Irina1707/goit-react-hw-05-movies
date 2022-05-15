import axios from 'axios';
const KEY = "d56a1d6e364589cb09ab54c068fe695d";
const URL = `https://api.themoviedb.org/3`;

// async function fetchMovies(url='', config = {}) {  
//         const response = await fetch(url, config);       
//         return response.ok
//             ? await response.json()
//             : Promise.reject(new Error(`No results were found`));
        
// }
    
// async function fetchSearchMovies(searchQuery='') {  
//         const response = await axios.get(`${URL}/search/movie?api_key=${KEY}&query=${searchQuery}`);
//         console.log(response);
//         return response.ok
//             ? await response
//             : Promise.reject(new Error(`No results were found`));
        
// }

// export async function fetchPopularMovies() {
//     const response = await axios.get(`${URL}/trending/movie?day&api_key=${KEY}`);
//     console.log(response);
//     return response.ok
//         ? await response
//         : Promise.reject(new Error(`No results were found`));
// }

export async function fetchPopularMovies() {
    const response = await axios.get(`${URL}/trending/movie/day?api_key=${KEY}`);
    return response;
}