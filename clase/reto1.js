let peliculas = [
    {nombre: 'harry potter', genero:'ciencia ficcion', costo: 2000},
    {nombre: 'dragon ball super' , genero:'anime', costo:3000},
    {nombre: 'wwakanda forever', genero: 'ciencia ficcion', costo: 6000},
    {nombre: 'Django sin cadenas' , genero: 'ciencia ficcion', costo: 2000},
    {nombre: 'el viaje de sohiyiro ' , genero: 'anime', costo: 60}
]

let filtro = peliculas.filter(function(pelicula){
    return(pelicula.genero=='ciencia ficcion')
})
console.log(filtro)

filtro = peliculas.filter(pelicula => pelicula.genero=='ciencia ficcion')
console.log(filtro)

/*
let filtroCosto = peliculas.filter(function(pelicula){
    return(pelicula.costo >= 2000)
})
console.log(filtroCosto)

filtroCosto = peliculas.filter(pelicula => pelicula.costo >= 2000)
console.log(filtroCosto)
 

let filtrarAnime = peliculas.filter(function(pelicula){  
    return(pelicula.genero='anime')
})
let filtrarCosto = filtrarAnime.find(function(costo){
    return costo.costo == 3000
})
console.log (filtrarCosto)

filtrarAnime = peliculas.filter =(pelicula => pelicula.genero ='anime')
filtrarCosto = filtrarAnime.find = (costo => costo.costo == 3000)

console.log(filtrarCosto)


//funcion tradicional
let mapa = peliculas.map(function(pelicula){
    return (pelicula.costo = pelicula.costo/1000 )
})
console.log(peliculas)

//funcion flecha
mapa = peliculas.map(pelicula => pelicula.costo = pelicula.costo/1000 )
console.log(peliculas)

//funcion tradicional
let mapaNombre = peliculas.map(function(pelicula){
    return (pelicula.nombre= 'gilma')
})
console.log(peliculas)

//funcion flecha
mapaNombre = peliculas.map(pelicula => pelicula.nombre= 'gilma')
console.log(peliculas)

*/