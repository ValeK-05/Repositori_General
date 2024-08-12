//recordar como crear variables del tipo string
var lenguaje = "phyton";
console.log(lenguaje);
var numero = 45;
console.log(numero);
document.write(lenguaje);

function mostrar() {
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var fecha = document.getElementById("fecha").value;
    var sexo = document.getElementById("sexo").selected;

    console.log(nombre + "\n" + apellidos + "\n" + fecha + "\n" + sexo);
}


