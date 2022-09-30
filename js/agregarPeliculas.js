/*
//7. Recorra el arreglo de películas y utilizando el DOM pinte en pantalla todos los nombres y duración de las 5 películas
export function agregarPeliculas(){
let peliculas = [
    {nombre: 'harry potter', genero:'ciencia ficcion', costo: 2000, duracion: 100, foto: 'img1.jpeg'},
    {nombre: 'dragon ball super' , genero:'anime', costo:3000, duracion: 120, foto: 'img1.jpeg'},
    {nombre: 'wwakanda forever', genero: 'ciencia ficcion', costo: 6000, duracion: 180, foto: 'img1.jpeg'},
    {nombre: 'Django sin cadenas' , genero: 'ciencia ficcion', costo: 2000, duracion: 70, foto: 'img1.jpeg'},
    {nombre: 'el viaje de sohiyiro ' , genero: 'anime', costo: 60, duracion: 90, foto:'img1.jpeg'}
]


let fila=document.getElementById("fila")

peliculas.forEach(function(pelicula){

    let columna= document.createElement("div")
    columna.classList.add("col")

    //CREO LA TARJETA
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("h-100")

    let foto=document.createElement("img")
    foto.classList.add("card-img-top")
    foto.src= pelicula.foto  

    let nombre=document.createElement("h4")
    nombre.classList.add("text-center")
    nombre.textContent=pelicula.nombre

    let genero=document.createElement("h6")
    genero.classList.add("text-center")
    genero.textContent=pelicula.genero

  
    let boton=document.createElement("button")
    boton.setAttribute("type","button")
    boton.classList.add("btn","btn-warning","mx-4","my-4")
    boton.textContent="ver producto"

    let costo=document.createElement("h5")
    costo.classList.add("text-center")
    costo.textContent=pelicula.costo

    let duracion=document.createElement("h5")
    duracion.classList.add("text-center")
    duracion.textContent=pelicula.duracion

    tarjeta.appendChild(foto)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(genero)
    tarjeta.appendChild(boton)
    tarjeta.appendChild(costo)
    tarjeta.appendChild(duracion)
    fila.appendChild(columna)




})

}
*/

export function pintarTienda(){

    let productosBD= [

        {nombre: "Zipper Bottle", precio: "$" +7000, descripcion: "Koozie personalizados para botellas 12oz", foto: "img/img1.jpeg", ranking:"img/rating4.png",  envío: "img/gratis.png"},
        {nombre: "Can Koozie", precio: "$" + 21000, descripcion: "Tripack de koozies para latas tamaño standard", foto: "img/img1.jpeg",ranking:"img/rating5.png", envío: "img/gratis.png"},
        {nombre: "24oz Can ", precio: "$" + 12000, descripcion: "Koozie personalizados para latas tamaño 24oz", foto: "img/img1.jpeg", ranking:"img/rating5.png",  envío: "img/gratis.png"},
        {nombre: "Jersey Bottle", precio: "$" + 15000, descripcion: "Koozie personalizados para botellas tamaño standard", foto: "img/img1.jpeg", ranking:"img/rating5.png",  envío: "img/gratis.png"},
        {nombre: "Strap Can", precio: "$" + 17000, descripcion: "Koozies para latas con cinta para sostener", foto: "img/img1.jpeg",ranking:"img/rating2.png",  envío: "img/gratis.png"},
        {nombre: "Water Bottle", precio:"$" + 14000, descripcion: "Perfectos koozies para botella de agua tamaño 12oz", foto: "img/img1.jpeg",ranking:"img/rating5.png", envío: ""},
       
        {nombre: "Can Koozie", precio: "$" +5000, descripcion: "Koozie personalizados para latas tamaño standard", foto: "img/img1.jpeg", ranking:"img/rating5.png", envío: ""},
        {nombre: "Camo Can", precio: "$" +5000, descripcion: "Koozie con impresion de camuflaje", foto: "img/img1.jpeg", ranking:"img/rating4.png", envío: ""},
        {nombre: "Round Can", precio: "$" +6000, descripcion: "Koozie con bordes redondeados", foto: "img/img1.jpeg",ranking:"img/rating3.png", envío: "" },
        {nombre: "Wine Glass", precio: "$" +20000, descripcion: "Koozies para copas de vinos", foto: "img/img1.jpeg",ranking:"img/rating4.png", envío: ""},

    ]

      
    

        //console.log(productosBD)
    
    let fila=document.getElementById("fila")
    productosBD.forEach(function(producto){
        /*
        console.log(producto.nombre)
        console.log(producto.foto)
        console.log(producto.precio)
        */
        
        let columna=document.createElement("div")
        columna.classList.add("col","mt-5")
    
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")
    
        let foto=document.createElement("img")
        foto.classList.add("card-img-top")
        foto.src=producto.foto
    
        let envío=document.createElement("img")
        envío.classList.add("col-2")
        envío.src=producto.envío
    
        let ranking=document.createElement("img")
        ranking.classList.add("col-3")
        ranking.src=producto.ranking

        let titulo=document.createElement("h3")
        titulo.classList.add("text-center")
        titulo.textContent=producto.nombre

        let precio=document.createElement("h5")
        precio.classList.add("text-center")
        precio.textContent= producto.precio
        
        let descripcion=document.createElement("p")
        descripcion.classList.add("text-center")
        descripcion.textContent=producto.descripcion
        descripcion.hidden=producto.descripcion

        /*
        let agregarArticulo=document.createElement("list")
        agregarArticulo.classList.add("number")
        agregarArticulo.textContent = "+"
       // agregarArticulo.setAttribute("marcador")
        //agregarArticulo.addEventListener("click")
        */
        let boton=document.createElement("button")
        boton.setAttribute("type","button")
        boton.classList.add("btn","btn-warning","mx-4","mb-4")
        boton.textContent="ver producto"

        tarjeta.appendChild(foto)
        tarjeta.appendChild(envío)     
        tarjeta.appendChild(titulo)
        tarjeta.appendChild(precio)
        tarjeta.appendChild(ranking)
        tarjeta.appendChild(descripcion)
        tarjeta.appendChild(boton)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
   
    
    })
}



