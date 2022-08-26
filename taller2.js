// 1.Cree un arreglo de 20 números (positivos y negativos) de forma
//tradicional e imprima en consola el arreglo

let numeros = [1,2,3,4,5,6,7,8,9,10,-11,-12,-13,-14,-15,-16,-17,-18,-19,-20]
console.log('EJECICIO 1 ' +numeros)

// 2.Cree un arreglo de 20 números (positivos y negativos) de forma
//POO e imprima en consola

let numeros1 = Array(1,2,3,4,5,6,7,8,9,10,-11,-12,-13,-14,-15,-16,-17,-18,-19,-20)
console.log('EJECICIO 2 ' +numeros)

// 3.Recorra uno de los 2 arreglos anteriores e imprima solo los números
//positivos

let numPositivos = numeros.filter(function(numero){
    return(numero>=0)
})
console.log('EJECICIO 3 ' +numPositivos)

// 4.Declare un objeto que con 10 atributos defina con claridad una
//película de Netflix, imprima por consola este objeto

let pelicula = 
    {
nombre:'Alerta Roja',
genero: 'accion y comedia, aventura ',
duracion: '1 h 58 min' ,
elenco: 'Dwayne Johnson, Ryan Reynolds, Gal Gadot',
esteTituloEs: 'Irreverente, Emocionante',
sinopsis: 'John Hartley, agente de la Interpol, no tendrá otro remedio que aliarse con el ladrón de arte más célebre de todos los tiempos, Nolan Booth, para capturar a la ladrona de arte más buscada del presente: la seductora y peligrosa Sarah Black.',
año: 2021,
clasificacionEdad: '+13',
direccion: 'Rawson Marshall Thurber' ,
guion: 'Andi Crumbley' ,
info: function() {
    return(this.nombre + ' ' + this.genero)
}

}



console.log(pelicula)

let peliculaArray = Object.values(pelicula)
console.log(peliculaArray)

let peliculaString = JSON.stringify(pelicula)
console.log(peliculaString)

for (nombreP in pelicula){
    console.log(pelicula[nombreP])
}

console.log(pelicula.info)



//5. Accede por separado e imprima por consola cada uno de los 10
//atributos declarados anteriormente en el objeto película
//let pelicula1= peliculas.forEach(function(pelicula){
  //  return(pelicula)
//})
