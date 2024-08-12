//Variables
var edad_juan = 18;
var ingresos_juan = 4000;
var edad_maría = 20;
var ingresos_maría = 5000;

//Salida por pantalla
console.log("La edad de Juan es: " + edad_juan);
console.log("Los ingresos de Juan son: " + ingresos_juan);
console.log("La edad de Maria es: " + edad_maría);
console.log("Los ingresos de Maria son: " + ingresos_maría);

//Condiciones
console.log("Juan es mayor que Maria y gana más: " + (edad_juan > edad_maría && ingresos_juan > ingresos_maría));
console.log("Maria es mayor que Juan y gana menos: " + (edad_maría > edad_juan || ingresos_maría < ingresos_juan));
console.log("No es verdad que Maria gane menos que Juan: " + (! ingresos_maría < ingresos_juan));
