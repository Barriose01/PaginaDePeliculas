const LINKAPI = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=98927ddba843b80658a25d9d96781942";
const IMG_PATH= "http://image.tmdb.org/t/p/w500/";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=98927ddba843b80658a25d9d96781942&query=";

let barraBusqueda = document.getElementById("barraBusqueda");
let peliculasContainer = document.getElementById("peliculasContainer");
let formBuscar = document.getElementById("form");
let tituloPagina = document.getElementById("titulo");

mostrarPeliculas(LINKAPI);


function mostrarPeliculas(url){
    fetch(url).then(res => res.json()).then(function(data){
        
        data.results.forEach((elemento) =>{
            console.log(elemento);
            let pelicula = document.createElement("div");
            pelicula.className = "peliculas";
            let imagen = document.createElement("img");
            imagen.className = "imagenPelicula";
            imagen.alt = elemento.title;
            imagen.src = IMG_PATH + elemento.poster_path;
            let tituloPelicula = document.createElement("p");
            tituloPelicula.className = "tituloPelicula";
            tituloPelicula.textContent = elemento.title;
            pelicula.appendChild(imagen);
            pelicula.appendChild(tituloPelicula);
            peliculasContainer.appendChild(pelicula);
            
        })
        
    });
}

formBuscar.addEventListener("submit",function(e){
    e.preventDefault();
    peliculasContainer.innerHTML = "";
    let busqueda = barraBusqueda.value;
    if(busqueda){
        mostrarPeliculas(SEARCHAPI + busqueda);
        barraBusqueda.value = ""
    }else{
        mostrarPeliculas(LINKAPI);
    }
})
tituloPagina.addEventListener("click",function(){
    mostrarPeliculas(LINKAPI);
})