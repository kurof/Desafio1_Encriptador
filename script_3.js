//otra version para la logica del encriptador/desencriptador

const listaClaves = [["e","enter","é"],["i","imes","í"],["a","ai","á"],["o","ober","ó"],["u","ufat","ú"]];

let arrayTexto = [];

//para encriptar
function encriptar(){

    let textoEncriptado = document.querySelector(".texto-ende").value; //capturar textarea
    arrayTexto = textoEncriptado.toLowerCase(); //para ponerlo en minúsculas

    for(let i=0; i<listaClaves.length; i++){

        //si hay acentos:
        if(arrayTexto.includes(listaClaves[i][2])){
            arrayTexto = arrayTexto.replaceAll(listaClaves[i][2],listaClaves[i][0]);
        }

        //ahora sí, el encriptado:
        if(arrayTexto.includes(listaClaves[i][0])){
            arrayTexto = arrayTexto.replaceAll(listaClaves[i][0],listaClaves[i][1]);
            //cambio por el otro elemento en el arreglo listaClaves 
             
        }
    } 

    document.querySelector(".no-texto").style.display = "none"; //ocultando div con imagen
    document.querySelector("#res-texto").innerHTML = arrayTexto; //mostrando resultado
    document.querySelector(".texto-ende").value = ""; //para vaciar el campo donde escribimos

    return arrayTexto;
    
}

//para desencriptar
function desencriptar(){
    // alert("Desencriptando...");
    let textoEncriptado = document.querySelector(".texto-ende").value;
    arrayTexto = textoEncriptado.toLowerCase();

    for(let i=0; i<listaClaves.length; i++){
        if(arrayTexto.includes(listaClaves[i][1])){
            arrayTexto = arrayTexto.replaceAll(listaClaves[i][1],listaClaves[i][0]);
        }
    } 

    document.querySelector(".no-texto").style.display = "none"; //ocultando div con imagen
    document.querySelector("#res-texto").innerHTML = arrayTexto;
    document.querySelector(".texto-ende").value = "";

}

//para copiar
function copiar(){
    let textoCopiado = document.querySelector("#res-texto"); //tomando datos del textarea resultado

    textoCopiado.select(); //para seleccionar el área

    navigator.clipboard.writeText(textoCopiado.value);
    alert("El texto se ha copiado al portapapeles.");
}



//capturando eventos del boton
let bEncriptar = document.querySelector("#encripta");
bEncriptar.onclick = encriptar;

let bDesencriptar = document.querySelector("#desencripta");
bDesencriptar.onclick = desencriptar;

let bCopiar = document.querySelector(".boton-copiar");
bCopiar.onclick = copiar;