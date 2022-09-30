// Declare un arreglo de 20 nombres, recórralo y mediante una función obtenga un nuevo arreglo con nombres que tengan más de 5 letras

let arregloNombres = ['ana', 'jose','mario', 'pedro', 'maria', 'juan' , 'ed', 'luis', 'any', 'tomas', 'Jeny', 'josefa', 'Gabriela ', 'Cruz ', 'Milagros ', 'Odalys ','Rafael ', 'Ligia ', 'Selena ', 'Eugenio'   ]

filtroNombre = arregloNombres.filter(function(nombre){
    return(nombre.length>5)
})
console.log(filtroNombre)