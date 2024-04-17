//tambien podemos usar en onClick que es un evento

// traemos el id del boton

// let boton = document.getElementById("btnPrincial");

// // ahora le asiganamos el evento onClick que sea igual al arrow function 
// // y dentro de las llaves le pondremos el console.log con la respuesta

// boton.onclick = () => {console.log("respuesta 2");}

// en esta no se puede pasar una variable, por eso se usa la primera

//la que no es recomendable cuando s hace en el html la tercra forma


// Haremos una funcion pasando parametros a la funcion y arrow function al evento

// function saludar(nombre){
//     console.log("Hola click " +  nombre);
// }

// let boton = document.getElementById("btnPrincial");

// let evento = prompt("ingrese el evento");
// // en este caso es el nombre del evento pero se puede hacer ingresando un nombre
// //  let nombre = prompt("ingrese el nombre");


// //este es una declaracion
// boton.addEventListener(evento, () =>  saludar("andres"));


//eventos mas comunes
//mousetown

// let boton = document.getElementById("btnPrincial");

// boton.addEventListener("mousedown", () => console.log("mousedown"));
//mouseup
// boton.addEventListener("mouseup", () => console.log("mouseup"));
//mouseover
// boton.addEventListener("mouseover", () => console.log("mouseover"));
//mouseout
// boton.addEventListener("mouseout", () => console.log("mouseout"));
//mousemove
// boton.addEventListener("mousemove", () => console.log("mousemove"));
//click
// boton.addEventListener("click", () => console.log("click"));


// let boton = document.getElementById("btnPrincial");
// let saludo = document.getElementById("saludo");

// boton.addEventListener("mousedown", () => {
//     saludo.className = "rojo";

// }); 

// boton.addEventListener("mouseover", () => {
//     saludo.className = "azul";
    
// }); 

// eventos del teclado

// let nombre = document.getElementById("nombre");

// //keydown se ejecuta cuando escribimos
// // nombre.addEventListener("keydown", () => console.log("keydown"));

// //el keyup se ejecuta cuando suelto la tecla
// nombre.addEventListener("keyup", () => console.log("keyup"));

//informacion del evento

// let nombre = document.getElementById("nombre");

// //esto nos dara la informacion de lo que apretamos
// // nombre.addEventListener("keyup", (e) => console.log(e));

// // pero si en el console.log le pasamos console.log(e.key); nos dara todas
// // las letras que clickeamos y la cantidad

// nombre.addEventListener("keyup", (e) => console.log(e.key));


// let nombre = document.getElementById("nombre");

// nombre.addEventListener("keyup", (e) => {
//     if (e.key === "a") {
//         saludo.className = "rojo";
//     } else if(e.key === "s") {
//         saludo.className = "azul";
//     } else {
//         saludo.className = "amarillo";
//     }
// });


// el evento change, cuando desenfoco del input y hago click por fuera.

// let nombre = document.getElementById("nombre");
// let saludo = document.getElementById("saludo");
// nombre.addEventListener("change", () => console.log("change"));


//el evento input

// let nombre = document.getElementById("nombre");

// nombre.addEventListener("input", () => console.log(nombre.value));

//podemos hacerlo con un if, aca si encluye @ se cambiara azul

// let nombre = document.getElementById("nombre");

// nombre.addEventListener("input", () => {
//     if (nombre.value.includes("@")) {
//         saludo.className ="azul";
//     }else {
//         saludo.className ="rojo";
//     }  
// });


//En este if que crearemos tambien crearemos un div para que sea mas dinamico

// let nombre = document.getElementById("nombre");
// nombre.addEventListener("input", () => {
//     if (nombre.value.includes("@")) {
//         saludo.className ="azul";
//     }else {
//         let mensaje = document.createElement("div");
//         mensaje.innerHTML = "correo invalido";
//         mensaje.className = "rojo";
//         document.body.append(mensaje);
//     }  
// });

//Ahora haremos un formulario, donde nos dara por consola los valores del formulario.


// let formulario = document.getElementById("formulario");
// formulario.addEventListener("submit", (e) => {
//     e.preventDefault();// este punto es escensial
//     let inputs = e.target.children;//traigo el valor de los inputs
//     console.log(inputs[0].value);
//     console.log(inputs[1].value);

// })


// podemos ponerle mas dinamica con un if, donde si no tiene @ el campo de mail, se borre el input


// let formulario = document.getElementById("formulario");
// formulario.addEventListener("submit", (e) => {
//     e.preventDefault();// este punto es escensial
//     let inputs = e.target.children;//traigo el valor de los inputs
//    if (!inputs[0].value.includes("@")) {
//         inputs[0].value = "";
//    }
//        console.log(inputs[0].value);
//        console.log(inputs[1].value);
// })

//Lo podemos hacer con un arreglo





// let formulario = document.getElementById("formulario");
// formulario.addEventListener("submit", (e) => {
//     e.preventDefault();// este punto es escensial
//     let inputs = e.target.children;

// })


// crear un formulario con un arreglo


 let ropa = [];

let formulario = document.getElementById("formulario");
let contenedor = document.getElementById("contenedor");

formulario.addEventListener("submit", (e) => {
	e.preventDefault();
	let inputs = e.target.children;
	ropa.push(inputs[0].value);


ropa.forEach( item => {
	let div = document.createElement("div");
	div.innerHTML = item;
	contenedor.append(div);

})
});

