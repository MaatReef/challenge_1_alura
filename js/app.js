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

// Tenemos un periodo de tiempo de cuatro semanas para desarrollar el proyecto y vamos a trabajar con el sistema ágil de desarrollo, utilizando el Trello de la siguiente forma:

// La columna Listos para iniciar presenta las tarjetas con elementos que aun no fueron desarrollados.
// En la columna En Desarrollo estarán los elementos que estés desarrollando en el momento. Al iniciar una tarea, podrás mover la tarjeta que contiene dicha tarea para esta columna.
// En la columna Pausado estarán los elementos que comenzaste a desarrollar, pero necesitaste parar por algún motivo.
// Por fin, en la columna Concluido estarán los elementos ya concluidos.
// El Trello es una herramienta de uso individual para que puedas controlar el progreso de tus actividades, pero no será evaluada.

window.onload = inicio;
//
let resultado = document.querySelector(".texto_resultado");
let sub_resultado = document.querySelector(".texto_btn");
let frase_cifrada = "";
let frase_descifrada = "";
let frase_descubierta = "";

let cifrado = "";
let descifrado = "";

function inicio(){
    document.querySelector(".btn_encriptar").onclick=encriptar;
    document.querySelector(".btn_desencriptar").onclick=desencriptar;
}

function encriptar(){
    var mensaje = "";
    var mensaje = document.getElementById("cifrar_texto").value;
    for(let i = 0; i < mensaje.length; i++) {
        let caracter = mensaje[i];
        if( caracter == "a") {
           let cifrado = caracter.replace("a", "ai");
           frase_cifrada = frase_cifrada + cifrado;
           console.log(cifrado);
           console.log(frase_cifrada);
        } else if ( caracter == "e") {
            let cifrado = caracter.replace("e", "enter");
            frase_cifrada = frase_cifrada + cifrado;
        } else if( caracter == "i") {
            let cifrado = caracter.replace("i", "imes");
            frase_cifrada = frase_cifrada + cifrado;
        } else if( caracter == "o") {
            let cifrado = caracter.replace("o", "ober");
            frase_cifrada = frase_cifrada + cifrado;
        } else if( caracter == "u") {
            let cifrado = caracter.replace("u", "ufat");
            frase_cifrada = frase_cifrada + cifrado;
        } else {
            frase_cifrada = frase_cifrada + mensaje[i];
        }
    }

    let muneco = document.querySelector(".muneco");
    muneco.classList.add('muneco_oculto');
    let caja = document.querySelector(".caja_interna-resultado");
    if (document.querySelector(".caja_interna-resultado") !== null){
         caja.classList.remove('caja_interna-resultado');
         caja.classList.add('caja_interna-resultadoChange');
     }
    mostrar_encriptación(frase_cifrada);

}

function mostrar_encriptación(){
    resultado.innerHTML = frase_cifrada;
    sub_resultado.innerHTML = `<button class="btn_copiar">Copiar</button>`;
    document.querySelector(".btn_copiar").onclick=copiarAlPortapapeles('copiar');
    frase_cifrada="";
    inicio();
}

function desencriptar(){
    var mensaje = null;
    var mensaje = document.getElementById("cifrar_texto").value;

    console.log(mensaje);
    if ( mensaje.includes("ai")){
        let descifrado = mensaje.replaceAll(/ai/g, "a");
        frase_descubierta = frase_descubierta + descifrado;
        console.log(frase_descubierta);
        console.log(descifrado);
    }
    if ( mensaje.includes("enter")) {
        frase_descubierta = frase_descubierta.replaceAll(/enter/g, "e");
        console.log(frase_descubierta);
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

    let muneco = document.querySelector(".muneco");
    muneco.classList.add('muneco_oculto');
    let caja = document.querySelector(".caja_interna-resultado");
    if (document.querySelector(".caja_interna-resultado") !== null){
         caja.classList.remove('caja_interna-resultado');
         caja.classList.add('caja_interna-resultadoChange');
     }
    mostrar_encriptación(frase_cifrada);

    mostrar_desencriptación(frase_descubierta);
}

function mostrar_desencriptación(){
    resultado.innerHTML = frase_descubierta;
    sub_resultado.innerHTML = `<button class="btn_copiar">Copiar</button>`;
    document.querySelector(".btn_copiar").onclick=copiarAlPortapapeles('copiar');
    frase_descubierta = "";
    inicio();
}

function copiarAlPortapapeles(id_elemento) {
    var auxiliar = document.createElement("input");
    auxiliar.setAttribute("value", document.getElementById(id_elemento).innerHTML);
    document.body.appendChild(auxiliar);
    auxiliar.select();
    document.execCommand("copy");
    document.body.removeChild(auxiliar);
    document.querySelector(".btn_desencriptar").removeAttribute('disabled', "true");
}