const printMovies = (data,container) => {
    console.log(data)
    const image_path='https://image.tmdb.org/t/p/w1280';
    data.forEach(pelicula=> {
        const {title,poster_path,vote_average,overview}= pelicula;
        const div = document.createElement('div');
    div.classList.add('movie');
    div.innerHTML=`
    <img src="${image_path+poster_path}" alt="">
    <div class="movie-info">
        <h3>${title}</h3>
        <span class="red">${vote_average}</span>
    </div>
    <div class="overview">
        ${overview}
    </div>
    `;
    container.appendChild(div)
        
    });

}

export default printMovies;
