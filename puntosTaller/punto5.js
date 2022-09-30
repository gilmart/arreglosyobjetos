let pelicula = {
    nombre:'Alerta Roja',
    genero: 'accion y comedia, aventura ',
    duracion: 120 ,
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

console.log(pelicula.nombre)
console.log(pelicula.genero)
console.log(pelicula.duracion)
console.log(pelicula.elenco)


let peliculaArray = Object.values(pelicula)
console.log(peliculaArray)


let peliculaString = JSON.stringify(pelicula)
//console.log(peliculaString)

