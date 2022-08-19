let numeros = [-5,100,200,5.5]

// agregar un nuevo elemento a mi arreglo
//PUSH

numeros.push(10)
console.log(numeros)

//recorriendo un alegro
numeros.forEach(function(numero){
    console.log(numero)
})

numeros.forEach(numero => console.log(numero))

//martin odesky - cousera lenguaje
//programacion funcinal o declarativa
//todos los array metodos se ayudand e una funcin anonima
// filtrar el arreglo

let filtro = numeros.filter(function(numero){
    return(numero>= 100)
})
console.log(filtro)

filtro = numeros.filter(numero => numero>=100 )
console.log(filtro)

//buscar elemento en un array 

let buscado = numeros.find(function(numero){
    return (numero > 10)
})
console.log(buscado)

//buscar elemento de otra manera

let ubicado = numeros.some(function(numero){
    return(numero == 1000)
})
console.log(ubicado)

// recorriendo y modificando arreglos al mismo tiempo 
// todos los metodos retornan menos el foreach
let mapa =  numeros.map(function(numero){
    return(numero = numero +1) 
})

console.log(mapa)

//mapa = numeros.map(numero => numero = console.log(mapa)  )