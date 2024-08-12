/*
const frutas = ["Manzana" , "Pera" , "Platano" , "Ciruela"];


var texto= "";

for(let i=0;i<frutas.length;i++){
    texto= texto + frutas[i] + "<br>";
}

document.getElementById("frutas").innerHTML=texto;
*/

const numeros= [7, 9, 15, 8, 6, 2, 5, 4];

var texto= "";

for(let i=0; i<numeros.length; i++){
    
    if(numeros[i]){
         texto += numeros[i] + "<br>"
    }

}
document.getElementById("frutas").innerHTML=texto;

for(let i=1; i<11; i=i+2){
    console.log(i)
}