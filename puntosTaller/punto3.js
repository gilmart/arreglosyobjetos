// 3.Recorra uno de los 2 arreglos anteriores e imprima solo los números positivos

let numeros = Array(1,2,3,4,5,6,7,8,9,10,-11,-12,-13,-14,-15,-16,-17,-18,-19,-20)

let numPositivos = numeros.filter(function(numero){
    return(numero>=0)
})
console.log('EJECICIO 3: ' +numPositivos)