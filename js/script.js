let text_elemet= "";

function texto_En_Pantalla(texto, id_elemt, elemet_tipe){
    text_elemet= document.getElementById(id_elemt);
    if(elemet_tipe ==="text"){
        text_elemet.innerHTML = texto
    }else{
        text_elemet.placeholder = texto;   
    }
}
function cifrar(){
    alert("Cifrar");
}
function descifrar(){
    
}

texto_En_Pantalla("Ingrese el texto aqui","User-text","texto");
texto_En_Pantalla("Ningún mensaje fue encontrado","h2","text");
texto_En_Pantalla("Ingresa el texto que desees encriptar o desencriptar.","h3","text");