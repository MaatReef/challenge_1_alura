// Las "llaves" de encriptación que utilizaremos son las siguientes:

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

// Requisitos:
// - Debe funcionar solo con letras minúsculas
// - No deben ser utilizados letras con acentos ni caracteres especiales
// - Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.

// Por ejemplo:
// "gato" => "gaitober"
// gaitober" => "gato"

// La página debe tener campos para
// inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.
// El resultado debe ser mostrado en la pantalla.
// Extras:
// - Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea que tenga la misma funcionalidad del ctrl+C o de la opción "copiar" del menú de las aplicaciones.

window.onload = inicio;
let resultado = document.querySelector(".texto_resultado");
let sub_resultado = document.querySelector(".texto_btn");
let frase_cifrada = "";
let frase_descubierta = "";
let cifrado = "";
let descifrado = "";

function inicio(){
    // La función inicio es llamada con la ventana, window, esté cargada, las cual llama a las siguientes funciones, escuchando por click en el botón correspondiente.
    document.querySelector(".btn_encriptar").onclick=encriptar;
    document.querySelector(".btn_desencriptar").onclick=desencriptar;
}

function encriptar(){
    // Vacío la variable mensaje, para evitar eventual sobreescritura futura
    var mensaje = "";
    var mensaje = document.getElementById("cifrar_texto").value;
    // Recorro con for la longitud del texto ingresado por el usuario en búsqueda de coincidencias a reemplzar.
    for(let i = 0; i < mensaje.length; i++) {
        let caracter = mensaje[i];
        if( caracter == "a") {
           let cifrado = caracter.replace("a", "ai");
           frase_cifrada += cifrado;
        } else if ( caracter == "e") {
            let cifrado = caracter.replace("e", "enter");
            frase_cifrada += cifrado;
        } else if( caracter == "i") {
            let cifrado = caracter.replace("i", "imes");
            frase_cifrada += cifrado;
        } else if( caracter == "o") {
            let cifrado = caracter.replace("o", "ober");
            frase_cifrada += cifrado;;
        } else if( caracter == "u") {
            let cifrado = caracter.replace("u", "ufat");
            frase_cifrada += cifrado;
        } else {
            frase_cifrada += mensaje[i];
        }
    }

    // Quito y agrego clases para quitar el muñeco, con js y css.
    let muneco = document.querySelector(".muneco");
    muneco.classList.add('muneco_oculto');

    // Agrego y quito clases para visualizar el layout adecuadamente.
    let caja = document.querySelector(".caja_interna-resultado");
    if (document.querySelector(".caja_interna-resultado") !== null){
         caja.classList.remove('caja_interna-resultado');
         caja.classList.add('caja_interna-resultadoChange');
     }
    
    // Llamo la función pasandole la información encontrada y modificada con el ciclo for anterior.
    mostrar_encriptación(frase_cifrada);

}

function mostrar_encriptación(){
    // Al mostrar el mensaje encriptado, solo agrego el botón dentro del Html
    resultado.innerHTML = frase_cifrada;
    sub_resultado.innerHTML = `<button class="btn_copiar">Copiar</button>`;
    
    // Llamo la función copiar si el usuario realizar el click sobre el botón.
    document.querySelector(".btn_copiar").onclick=copiarAlPortapapeles('copiar');
    
    // Vacío la variable frase_cifrada, para evitar eventual sobreescritura futura
    frase_cifrada="";
}

function copiarAlPortapapeles(id_elemento) {
    // Función que se encarga de copiar en el portapeles, con un input auxiliar que luego eleimino
    var auxiliar = document.createElement("input");
    auxiliar.setAttribute("value", document.getElementById(id_elemento).innerHTML);
    document.body.appendChild(auxiliar);
    auxiliar.select();
    document.execCommand("copy");
    document.body.removeChild(auxiliar);
}

function desencriptar(){
    // Vacío la variable mensaje, para evitar eventual sobreescritura futura
    var mensaje = "";
    var mensaje = document.getElementById("cifrar_texto").value;

    // Corroboro las respectivas coincidencias del texto ingresado por el usuario
    if ( mensaje.includes("ai")){
        let descifrado = mensaje.replaceAll(/ai/g, "a");
        frase_descubierta += descifrado;
    }
    if ( mensaje.includes("enter")) {
        frase_descubierta = frase_descubierta.replaceAll(/enter/g, "e");
    }
    if ( mensaje.includes("imes")) {
        frase_descubierta = frase_descubierta.replace(/imes/g, "i");
    }
    if ( mensaje.includes("ober")) {
        frase_descubierta = frase_descubierta.replace(/ober/g, "o");
    }
    if ( mensaje.includes("ufat")) {
        frase_descubierta = frase_descubierta.replace(/ufat/g, "u");
    }

    // Quito y agrego clases para quitar el muñeco, con js y css.
    let muneco = document.querySelector(".muneco");
    muneco.classList.add('muneco_oculto');
    // Agrego y quito clases para visualizar el layout adecuadamente.
    let caja = document.querySelector(".caja_interna-resultado");
    if (document.querySelector(".caja_interna-resultado") !== null){
         caja.classList.remove('caja_interna-resultado');
         caja.classList.add('caja_interna-resultadoChange');
     }

    // Llamo la función pasandole la información encontrada y modificada con la validación de los if.
    mostrar_desencriptación(frase_descubierta);
}

function mostrar_desencriptación(){
    // Al mostrar el mensaje desencriptado, solo agrego el botón dentro del Html para volver a copiar si lo desea el usuario.
    resultado.innerHTML = frase_descubierta;
    sub_resultado.innerHTML = `<button class="btn_copiar">Copiar</button>`;
    
    // Llamo la función copiar si el usuario realizar el click sobre el botón.
    document.querySelector(".btn_copiar").onclick=copiarAlPortapapeles('copiar');
    
    // Vacío la variable frase_cifrada, para evitar eventual sobreescritura futura
    frase_descubierta = "";
}

