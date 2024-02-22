function texto_En_Pantalla(texto, id_elemt, elemet_tipe){
    let $text_elemet= document.getElementById(id_elemt);
    if(elemet_tipe ==="text"){
        $text_elemet.innerHTML = texto
    }else{
        $text_elemet.placeholder = texto;   
    }
}
function obtener_Datos(){
   return document.getElementById("User-text").value;
}
function new_content($text){
    const $aside_ul = document.querySelector("#text-not-found");
    const $encrypted_text = document.querySelector("#encrypted-text");
    const $encrypted_textarea = document.getElementById("encrypted-textarea");
    $aside_ul.style.display = "none";
    $encrypted_text.style.display = "inline";
    $encrypted_textarea.value = $text;
    
}
/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/
function cifrar(){
    let $cadena_encriptada="";
    let $cadena=obtener_Datos();
    let $tabla_de_encriptacion={
        a:"ai",
        e:"enter",
        i:"imes",
        o:"ober",
        u:"ufat"
    };
    for(const $letra of $cadena){

        if($letra in $tabla_de_encriptacion){
            $cadena_encriptada+=$tabla_de_encriptacion[$letra];
        }else{
            $cadena_encriptada+=$letra;
        }
    }

  
    if($cadena!= ""){
        new_content($cadena_encriptada);
    }else{
        alert("El campo esta vacio..")
    }
    
    
}
function descifrar(){
    let $cadena_decodificada ="";
    let $cadena_codificada=obtener_Datos();
    let $tabla_de_palabras={
        ai:"a",
        enter:"e",
        imes:"i",
        ober:"o",
        ufat:"u"
    };
    let i =0;
    while(i < $cadena_codificada.length){
        let esta = false;
        for(let $palabra in $tabla_de_palabras){
            if($cadena_codificada.substr(i,$palabra.length)===$palabra){
                $cadena_decodificada+=$tabla_de_palabras[$palabra];
                i +=$palabra.length;
                esta =true;
                break;
            }
        }
        if(!esta){
            $cadena_decodificada+=$cadena_codificada[i];
            i++;
        }
    }
    if($cadena_codificada!= ""){
        new_content($cadena_decodificada);
    }else{
        alert("El campo esta vacio..")
    }


}

texto_En_Pantalla("Ingrese el texto aqui","User-text","texto");
texto_En_Pantalla("Ningún mensaje fue encontrado","text-aside-message","text");
texto_En_Pantalla("Ingresa el texto que desees encriptar o desencriptar.","text-aside-info","text");
texto_En_Pantalla("Cristian Peña","name", "text")
