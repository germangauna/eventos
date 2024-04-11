//tambien podemos usar en onClick que es un evento

// traemos el id del boton

// let boton = document.getElementById("btnPrincial");

// // ahora le asiganamos el evento onClick que sea igual al arrow function 
// // y dentro de las llaves le pondremos el console.log con la respuesta

// boton.onclick = () => {console.log("respuesta 2");}

// en esta no se puede pasar una variable, por eso se usa la primera

//la que no es recomendable cuando s hace en el html la tercra forma


// Haremos una funcion pasando parametros a la funcion y arrow function al evento

function saludar(nombre){
    console.log("Hola click " +  nombre);
}

let boton = document.getElementById("btnPrincial");

let evento = prompt("ingrese el evento");
// en este caso es el nombre del evento pero se puede hacer ingresando un nombre
//  let nombre = prompt("ingrese el nombre");


//este es una declaracion
boton.addEventListener(evento, () =>  saludar("andres"));





























