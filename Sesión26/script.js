//Ejercicio 1
//Imprimir los numeros del 0 al 5
/*
var numero=2;

while(numero <=100){
    document.getElementById("resultado").innerHTML +=numero + "<br>";
    numero=numero+2;
}

const paises=["Uruguay","Peru","Chile","Venezuela","Colombia"];
let i=0
while(paises.length > i){
    console.log(paises[i]);
    i=i+1;
}
*/

//Mostrar prompt para capturar nombre

    var i=0

    while(i<5){
        var nombre= prompt("¿Cual es tu nombre?");
        document.getElementById("resultado").innerHTML +=nombre +"<br>";
        i=i+1
    }

   
    



