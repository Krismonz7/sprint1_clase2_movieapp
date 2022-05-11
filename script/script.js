import getData from "../helpers/getData.js";
import printMovies from "../modules/printMovies.js";
import search from "../modules/search.js";

const url='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';

getData(url);

const main  = document.getElementById('main');
const form = document.getElementById('form');

let movies_data;

document.addEventListener( 'DOMContentLoaded', async() => {
    const movies = await getData( url );
    movies_data = await getData(url)
    printMovies(movies,main)
} );

console.log(movies_data)


const valor_busqueda=document.getElementById('search').value;

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const valor_busqueda=document.getElementById('search').value;
    const resultados_busqueda= search(valor_busqueda,movies_data,main);
    printMovies(resultados_busqueda,main)
})