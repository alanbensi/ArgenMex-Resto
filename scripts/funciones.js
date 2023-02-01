// Funcion con function sin parametros


// // function nombreFuncion (Parametros o no) {
//     BLOQUE DE CODIGO A EJECUTAR
// }

// nombreFuncion () Invocar a la funcion.


// function saludar() {
//     console.log("Hola usuario! Como estas?");
// }
// saludar();

// Funcion con function + parametros (Nos permite hacer mas dinamica y re-utilizable la función)

// function saludarConParametros (nombre, edad, cursoPreferido) {
//     console.log ("Hola " + nombre + " como estas?");
//     console.log ("Tenes " + edad + " años y tu curso preferido de programación es " + cursoPreferido)
// }

// saludarConParametros ("Militza", 29, "Programacion web" );
// saludarConParametros ("Diego", 21, "Python");


// Funcion con return (Nos permite "sacar" el resultado fuera de la funcion. Si necesitamos usar el resultado en otro lugar del codigo, con el return podemos hacerlo. Sin este, podriamos mostrarlo en consola o alerta o lo que sea pero ese resultado solo va a existir ahi dentro.)

// function saludarReturn(nombre, edad, cursoProgramacion) {
//     return (`Hola ${nombre}. Tenés ${edad} años y queres hacer el curso de ${cursoProgramacion}`);
// }

// const resultadoReturn = saludarReturn("pepito", 54, "Programacion backend");

// console.log (resultadoReturn);

////////////////////// ARROW FUNCTIONS:

// const saludar = () => console.log ("hola usuario como estas?");


// saludar();


////////////////////// ARROW FUNCTION CON 1 PARAMETRO:

// const saludar = nombre => console.log("hola " + nombre +  " como estas?");

// saludar("Jaime");
// saludar("Javier");

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Objeto auto con metodo "arrancar"

// let nombreObjeto = {
//    CARACTERISTICAS REFERENTES AL OBJETO .... Necesitamos usar : y , luego de cada uno
//}


// const auto = {
//     marca: "Mercedes Benz",
//     modelo: "2023 2.0 Turbo",
//     velocidadMaxima: 280,
//     arrancarAuto () {
//         console.log ("El auto arranco perfecto!");
//     }
// }

// console.log ("Este es el objeto del auto: ", auto);

// console.log (auto.modelo);
// auto.arrancarAuto();



// //// Los objetos pueden tener todos los tipos de datos dentro. Propiedades, metodos (que pueden tener argumentos en sus () o no). + destructuring


// const {marca, velocidadMaxima} = auto;


// alert ("La marca del auto es " + marca + " y su velocidad maxima es " + velocidadMaxima)


// //ARRAYS => Son como las "Listas del supermercado" pero en programacion!

// const o let nombreArray = [valor1, valor2, "String3", [arrayDentroDeArray], objeto={abc:123,def:456}];


// const productos = ["hola", 54, "papas fritas", true, tortugaNinja = { nombre: "leonardo", tortuga: "roja" }, arrayDentro = ["estoy dentro", "soy el segundo array"]]; 

// // console.log ("hola soy el array de productos", productos);

// // console.log (productos[4].nombre);
// // console.log (productos[5][1]);


// const [saludo, , comida] = productos;

// console.log (comida);



const comidas = [
    { id: 1, nombre: "Tacos al pastor", precio: 400, img: "../imagenes/tacos-al-pastor.jpg", pais: "mex" , cantidad: 1 },
    { id: 2, nombre: "Asado (carne argentina)", precio: 700, img: "../imagenes/asado.jpg", pais: "arg", cantidad: 1 },
    { id: 3, nombre: "Nachos", precio: 120, img: "../imagenes/nachos.jpg", pais: "mex", cantidad: 1 },
    { id: 4, nombre: "Locro", precio: 400, img: "../imagenes/locro.jpg", pais: "arg", cantidad: 1 },
    { id: 5, nombre: "Pollo con mole", precio: 800, img: "../imagenes/Mole.jpg", pais: "mex", cantidad: 1 },
    { id: 6, nombre: "Cordero patagonico con papas", precio: 730, img: "../imagenes/cordero-patagonico.jpg", pais: "arg", cantidad: 1 },
    { id: 7, nombre: "Chiles en nogada", precio: 600, img: "../imagenes/chiles-nogada.jpg", pais: "mex", cantidad: 1 },    
    { id: 8, nombre: "Pastel de papa", precio: 460, img: "../imagenes/pastel-papa.jpg", pais: "arg", cantidad: 1 },
    { id: 9, nombre: "Pozole", precio: 750, img: "../imagenes/pozole.jpg", pais: "mex", cantidad: 1 },
    { id: 10, nombre: "Empanada Salteña", precio: 330, img: "../imagenes/empanada-saltena.jpg", pais: "arg", cantidad: 1 },
];

let suma = 0;

// for (let i= 0; i < comidas.length; i++) {
//     console.log ("Solucion de edu", suma += comidas[i].precio)
// }

const carrito = [];

const agregarAlCarrito = (producto, carrito) => {
    carrito.push(producto);
    console.log("Se agrego con exito el producto!");
}


// console.log ("Carrito de compras: ", carrito)

// for (let i = 0; i < carrito.length; i++) {
//     console.log("TOTAL DEL CARRITO DE COMPRAS: ", suma += carrito[i].precio);
// }


///////////////////////////////////////////////////////////////////////////////

// FOR EACH

// comidas.forEach (comida => {
//     console.log (comida.nombre, comida.precio)
// });

// FILTER

// const comidasFiltrado = comidas.filter(item => item.precio > 300);

// console.log ("Las comidas mas caras del menu son:", comidasFiltrado);

// const filtradoPorNombre = comidas.filter (item => item.nombre.includes("H"));

// console.log ("Los productos que contienen h son: ", filtradoPorNombre);

//  FIND
// const usuarioAgregaCarrito = (producto)=> {
//     const comidaElegida = carrito.find(e => e.id === producto.id);
//     if (comidaElegida) {
//         comidaElegida.cantidad = comidaElegida.cantidad + 1;
//         console.log ("YA EXISTE", carrito)
//     } else {
//         producto.cantidad = 1; 
//         carrito.push (producto); 
//         console.log("PRIMERA VEZ", carrito)
//     }
// }

// const comidaElegida = comidas.find(e => e.id === 5);
// console.log (comidaElegida);





// console.log ("El producto elegido es: ",comidaElegida)

// console.log ("EL CARRITO TIENE: ", carrito);
// agregarAlCarrito (comidaElegida, carrito); 

// console.log ("El carrito tiene: ", carrito);


// SOME 

// const nombre = comidas.some (elemento => elemento.nombre === "Pancho con mayonesa");

// console.log ("El producto existe? ", nombre);


// MAP 

// const martesDeFrescura = comidas.map (item => item.precio / 2);

// console.log ("Los precios originales son: ", comidas)
// console.log ("El precio de mis productos CON DESCUENTO es: " , martesDeFrescura); 

// let nuevoArray = comidas.map ((item)=> ({
//     nombre: item.nombre, 
//     precio: item.precio / 2 , 
//     id: item.id + 1 
// }));

// console.log (comidas, "ARRAY SIN DESCUENTO");

// console.log (nuevoArray, "Array con descuento");


// REDUCE

// VAMOS A SACAR EL PRECIO FINAL DE TODO NUESTRO CARRITO DE COMPRAS 

// OPCION A

// agregarAlCarrito (comidas[1], carrito); 
// agregarAlCarrito (comidas [6], carrito);
// agregarAlCarrito(comidas[3], carrito);
// agregarAlCarrito(comidas[2], carrito);
// agregarAlCarrito(comidas[7], carrito);


// console.log ("EL CARRITO ACTUALMENTE TIENE :",carrito);


// const arrayPrecios = carrito.map (item => item.precio);

// console.log (arrayPrecios,"nuevo array solo con los precios");

// const precioFinal = arrayPrecios.reduce ((totalCarrito, precios)=> totalCarrito + precios);

// console.log ("El valor a pagar es : ", precioFinal);



//OPCION B


// const precioFinal = carrito.reduce ((total , precioProductos)=> total + precioProductos.precio, 500);

// console.log ("El valor a final del carrito CONTANDO EL DELIVERY: ", precioFinal);


// SORT 

// console.log ("ARRAY SIN MODIFICAR",comidas);




// console.log (mayorPrecio, "mas caro a mas barato"); 
// console.log ("DE MAS BARATO A MAS CARO: ", menorPrecio);


// const ordenAlfabetico = comidas.sort ((item1,item2)=> {
//     if (item1.nombre === item2.nombre) {
//         return 0
//     } else if (item1.nombre > item2.nombre) {
//         return -1;
//     } else {
//         return 1
//     }
// });

// console.log ("PRODUCTOS ORDENADOS ALFABETICAMENTE: ", ordenAlfabetico)







console.log (document); 

// COMO ACCEDO A MIS ELEMENTOS DEL DOM??? 

// querySelector ()
const tituloPagina = document.querySelector("section") // PRIMER ETIQUETA QUE CUMPLA CON EL SELECTOR. 

console.log (document.querySelector(".linksNav")) // PRIMER CLASE QUE COINCIDE CON EL SELECTOR

console.log (document.querySelector ("#prueba")) 


// querySelectorAll ()

console.log (document.querySelectorAll("div")) //Todas las etiquwetas que cumplan con el selector

console.log (document.querySelectorAll(".nav-link")) // Todas las etiquetas que cumplan con el selector de clase


// getElementById (id) 




///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// COMO MODIFICAR ELEMENTOS DEL DOM: 


//textContent = bla bla bla

// tituloPagina.textContent = "BIENVENIDOS A LA CLASE DE DOM";

// innerHTML 

// tituloPagina.innerHTML = "<div><span>AHORA ESTOY MODIFICANDO EL TITULO DESDE INNER </span></div>"


/////////////////////////////////////////////////////////////////////////////////////////////////////////////


//COMO AGREGAR CLASES DESDE DOM

// tituloPagina.classList.add ("claseDePrueba" , "clase2", "clase50", "my-5")


/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// COMO AGREGAR ETIQUETAS DESDE DOM: 

// const listaNav = document.getElementById("listaNavPrueba"); 

// // const li = document.createElement ("li"); 

// // li.textContent = "ELEMENTO DE LISTA DESDE JS"

// // listaNav.appendChild(li);

// listaNav.innerHTML = "<li>Elemento de lista desde js </li>"


const contenedorProductos = document.getElementById("contenedorProductos");

comidas.forEach (comida => {
    contenedorProductos.innerHTML += 
    `
    <div class="card cardComidas">
        <img src="${comida.img}" class="card-img-top imgComidas" alt="${comida.nombre}">
        <div class="card-body cuerpoCard">
            <h3 class="card-title tituloComida">${comida.nombre}</h3>
            <p class="card-text precioComida">Precio: $${comida.precio} </p>
            <button class="btn btnAgregarCarrito" id="${comida.id}">AGREGAR AL CARRITO</button>
        </div>
    </div>
    `
})

