
function multiplicacion(a, b){
    resultado= a*b;
    return resultado;
}

var resultado= multiplicacion(15, 2);
console.log(resultado)


function cuadrado(num1, num2){
    resultado2=num1**num2;
    return resultado2;
}
var resultado2= cuadrado(4,2)
console.log(resultado2)

function preciopolo(precio, descuento){
    descuento= precio*descuento/100
    preciofinal= precio-descuento
    return preciofinal;
}
var preciofinal= preciopolo(100, 20)
console.log(preciofinal);