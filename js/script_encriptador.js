var ingresarTexto = document.querySelector(".ingresarTexto");
var button1 = document.querySelector(".button1");
var button2 = document.querySelector(".button2");
var buttonCopy = document.querySelector(".copiar");
var resultado = document.querySelector(".resultado");
var caja_resultado = document.querySelector(".caja-2");
var imagenInicio = document.querySelector(".sinMensaje");

/*VARIABLES DE ENCRIPTACION*/
const a = "ai";
const e = "enter";
const i = "imes";
const o = "ober";
const u = "ufat";
var revision;
var vocalesEncrip = [a, e, i, o, u];
var vocalesNorm = ["a", "e", "i", "o", "u"];

function verificar (input){
    let mayusculas = new RegExp(/[A-Z\u00f1\u00d1\áéíóúÁÉÍÖÚ]+/);
    var permitido = mayusculas.test(input);
    console.log(permitido);
    return permitido;
}

function botonEncriptar(){
    var textoIngresado = ingresarTexto.value;
    //var encriptado = textoIngresado.replaceAll(/e/g, e) .replaceAll(/i/g, i) .replaceAll(/a/g, a) .replaceAll("o", o) .replaceAll("u", u);
    if(verificar(textoIngresado) == true){
        alert("ingrese Un caracter valido");
        resultado.value="";
        ingresarTexto.value="";
        ingresarTexto.focus();
        noMsj();
        imagenInicio.style.display = "inline";
    }
    else if(textoIngresado==""){
        alert("ingrese un valor");
        noMsj();
        imagenInicio.style.display = "inline";
    }
    else {
        var impresion;
        var arr = [...textoIngresado];
        for(var contador = 0; contador<arr.length; contador++){
            if((arr[contador]=="a")){
                arr.splice([contador], 1, a);  
            }

            if(arr[contador]=="e"){
                arr.splice([contador], 1, e);
            }
        
            if(arr[contador]=="i"){
                arr.splice([contador], 1, i);
            }
        
            if(arr[contador]=="o"){
                arr.splice([contador], 1, o);
            }
        
            if(arr[contador]=="u"){
                arr.splice([contador], 1, u);        
            }
        }
        impresion = arr.join("");
        resultado.value= impresion;
        imagenInicio.style.display = "none";
        buttonCopy.style.display="inline";
        resultado.style.display="inline";
        caja_resultado.style.display="inline";

        //console.log(arr);         
    }
    
} 

function botonDesencriptar(){
    var textoIngresado = ingresarTexto.value;
    if(verificar(textoIngresado) == true){
        alert("ingrese Un caracter valido");
        resultado.value="";
        ingresarTexto.value="";
        ingresarTexto.focus();
    }
    else{
        var desencriptar = textoIngresado.replaceAll(e, vocalesNorm[1]) 
        .replaceAll(i, vocalesNorm[2]) 
        .replaceAll(a, vocalesNorm[0]) 
        .replaceAll(o, vocalesNorm[3]) 
        .replaceAll(u, vocalesNorm[4]);
        resultado.value = desencriptar;
    
    }
    }

function copiar (){
    var textoCopiado = resultado;
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);
    document.execCommand("copy");
    ingresarTexto.value="";
}

function noMsj(){
    resultado.style.display="none";
    buttonCopy.style.display="none";
    caja_resultado.style.display="none";
}

noMsj();
ingresarTexto.focus();
button1.onclick = botonEncriptar;
button2.onclick = botonDesencriptar;
buttonCopy.onclick = copiar;