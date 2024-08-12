//Variables
const diaSemana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
const frutas = ["manzana","platano","pera","uva","ciruela"];




//Funciones

document.getElementById("mostrar").addEventListener("click",function mostrar(){
    //Salidas en documento
document.getElementById("arreglo1").innerHTML=diaSemana;
document.getElementById("valor1").innerHTML=diaSemana[6];
document.getElementById("frutas").innerHTML=frutas;

//Longitud del arreglo frutas

document.getElementById("long_frutas").innerHTML="Hay "+frutas.length+" frutas";
})

