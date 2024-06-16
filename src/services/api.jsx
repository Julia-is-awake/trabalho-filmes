import axios from 'axios';

//url da api
//base da url https://api.themoviedb.org/3/
//https://api.themoviedb.org/3/movie/now_playing?api_key=b7d9709366f58982f8d7f791d8aa19ba&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;