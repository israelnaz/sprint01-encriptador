var ingresarTexto = document.querySelector(".ingresarTexto");
var button1 = document.querySelector(".button1");
var button2 = document.querySelector(".button2");
var buttonCopy = document.querySelector(".copiar");
var resultado = document.querySelector(".resultado");
var caja_resultado = document.querySelector(".caja-2");
var imagenInicio = document.querySelector(".sinMensaje");
var iconoAlerta = document.querySelector(".icon2");
var iconoPrecaucion = document.querySelector(".icon");

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
    let mayusculas = new RegExp(/[A-Z\u00f1\u00d1\áéíóúÁÉÍÖÚ+´]+/);
    var permitido = mayusculas.test(input);
    console.log(permitido);
    return permitido;
}

function botonEncriptar(){
    var textoIngresado = ingresarTexto.value;
    //var encriptado = textoIngresado.replaceAll(/e/g, e) .replaceAll(/i/g, i) .replaceAll(/a/g, a) .replaceAll("o", o) .replaceAll("u", u);
    if(verificar(textoIngresado) == true){
        //alert("ingrese un caracter valido");
        iconosdeAlerta();
        resultado.value="";
        ingresarTexto.value="";
        ingresarTexto.focus();
        noMsj();
        imagenInicio.style.display = "inline-block";        
    }

    else if(textoIngresado==""){
        //alert("ingrese un texto");
        noMsj();
        imagenInicio.style.display = "inline-block";
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
        buttonCopy.style.display="inline-block";
        resultado.style.display="inline-block";
        caja_resultado.style.display="inline-block";
        iconoPrecaucion.style.display="initial";
        iconoAlerta.style.display="none";


        //console.log(arr);         
    }
    
} 

function botonDesencriptar(){
    var textoIngresado = ingresarTexto.value;
    if(verificar(textoIngresado) == true){
        //alert("Ingrese un texto en minusculas y sin tildes");
        resultado.value="";
        ingresarTexto.value="";
        ingresarTexto.focus();
        iconosdeAlerta();
        noMsj();
        imagenInicio.style.display = "inline-block";
    }
    
    else if(textoIngresado==""){
        //alert("Ingrese un texto para encriptar o desencriptar");
        noMsj();
        imagenInicio.style.display = "inline-block";
    }

    else{
        var desencriptar = textoIngresado.replaceAll(e, vocalesNorm[1]) 
        .replaceAll(i, vocalesNorm[2]) 
        .replaceAll(a, vocalesNorm[0]) 
        .replaceAll(o, vocalesNorm[3]) 
        .replaceAll(u, vocalesNorm[4]);
        resultado.value = desencriptar;

        imagenInicio.style.display = "none";
        buttonCopy.style.display="inline-block";
        resultado.style.display="inline-block";
        caja_resultado.style.display="inline-block";
        iconoPrecaucion.style.display="initial";
        iconoAlerta.style.display="none";
    
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
function iconosdeAlerta(){
    iconoAlerta.style.display="flex";
    iconoPrecaucion.style.display="none";
}

noMsj();
iconoAlerta.style.display="none";
ingresarTexto.focus();
button1.onclick = botonEncriptar;
button2.onclick = botonDesencriptar;
buttonCopy.onclick = copiar;