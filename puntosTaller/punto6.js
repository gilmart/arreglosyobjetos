// 6. Cree un arreglo de 5 películas 
let peliculas = [
    {nombre: 'harry potter', genero:'ciencia ficcion', costo: 2000, duracion: 100},
    {nombre: 'dragon ball super' , genero:'anime', costo:3000, duracion: 120},
    {nombre: 'wwakanda forever', genero: 'ciencia ficcion', costo: 6000, duracion: 180},
    {nombre: 'Django sin cadenas' , genero: 'ciencia ficcion', costo: 2000, duracion: 70},
    {nombre: 'el viaje de sohiyiro ' , genero: 'anime', costo: 60, duracion: 90}
]
//7. Recorra el arreglo de películas y utilizando el DOM pinte en pantalla todos los nombres y duración de las 5 películas

peliculas.forEach(function(pelicula){
    i=0
    console.log('nombre: ' +pelicula.nombre, '------ genero: ' +pelicula.genero)
})





//8. Obtenga un nuevo arreglo de películas cuya duración sea menor a 2 horas
/*
let filtroDuracion = peliculas.filter(function(pelicula){
    return(pelicula.duracion <120)
})
console.log(filtroDuracion)

arregloNuevoFiltro = [filtroDuracion]
console.log(arregloNuevoFiltro)

*/