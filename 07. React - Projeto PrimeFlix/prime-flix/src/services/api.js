import axios from 'axios';

// https://api.themoviedb.org/3/movie/550/recommendations?api_key=510e3d0a6252e01ab343ede762380f85&language=pt-br

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;