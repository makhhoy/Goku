let estadoGoku = "reposo";
let goku = document.getElementById("goku");
function transformacionGoku(){
    if(estadoGoku == "reposo"){
        estadoGoku = "preparado";
        console.log("Estoy preparado");
        goku.classList.add("active");
    } else if (estadoGoku == "preparado"){
        estadoGoku = "ssj";
        console.log("Soy un ssj");
        goku.classList.remove("active");
        goku.classList.add("ssj");
    } else{
        estadoGoku = "reposo";
        goku.classList.remove("ssj");
        console.log("Estoy tranqui");
    }
    
}