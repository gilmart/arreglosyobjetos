// 4.Declare un objeto que con 10 atributos defina con claridad una película de Netflix, imprima por consola este objeto

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
console.log(pelicula)



