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
    /*Modificacion de estilos de float-right */
    const $float_right = document.querySelector("aside");
    $float_right.innerHTML = `
    <textarea id="new-textarea" readonly> ${$text} </textarea>
    <button class="style-input" id="copiar">Copiar</button>`;

    const $text_area= document.getElementById("new-textarea");
    $text_area.style.display ="flex";
    $text_area.style.justifyContent ="center"
    $text_area.style.width = "240px";
    $text_area.style.height = "550px";
    $text_area.style.resize = "none";
    $text_area.style.border = "none";
    $text_area.style.outline = "none";
    $text_area.style.color ="#495057"

    const $copy_btn = document.getElementById("copiar");
    $copy_btn.style.border="#0A3871 solid 1px";
    $copy_btn.style.color= "#0A3871";
   

}
function cifrar(){
    let $cadena=[] ;
    $cadena =obtener_Datos();
    for(let i =0 ; i < $cadena.length; i++){
        console.log($cadena[i]);
    }
    new_content($cadena);
    
}
function descifrar(){
    
}

texto_En_Pantalla("Ingrese el texto aqui","User-text","texto");
texto_En_Pantalla("Ningún mensaje fue encontrado","text-aside-message","text");
texto_En_Pantalla("Ingresa el texto que desees encriptar o desencriptar.","text-aside-info","text");
texto_En_Pantalla("Cristian Peña","name", "text")
