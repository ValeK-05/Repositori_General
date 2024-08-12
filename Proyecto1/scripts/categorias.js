console.log(localStorage.getItem("nombre"));
var name=localStorage.getItem("nombre");

document.getElementById("saludo").innerHTML=`Hola ${name}`