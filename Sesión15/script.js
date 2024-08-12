//Variables

var clima = 'nublado';
var fruta = 'manzana';
var dia_semana = 'martes';

//Estructura Switch Case

switch(clima){
    case 'lluvioso':
        console.log("Recuerda llevar un paraguas");
        break;
    case 'soleado':
        console.log("Viste ligero");
        break;
    case 'nublado':
        console.log("Sal a la calle");
        break;
    default:
        console.log("Tipo de clima desconocido");
        break;
}

//Si la fruta es manzana el precio es de s/.5
//Si la fruta es platano el precio es de s/.2
//Si la fruta es mango el precio es de s/.4
//Si es cualquier otra fruta no se tiene esa fruta

switch(fruta){
    case 'platano':
        console.log("Su precio es de S/.2");
        break;
    case 'manzana':
        console.log("Su precio es de S/.5");
        break;
    case 'mango':
        console.log("Su precio es de S/.4");
        break;
    default:
        console.log("No se tiene esa fruta");
        break;
}

switch(dia_semana){
    case 'lunes':
        console.log("Hoy es Lunes");
        break;
    case 'martes':
        console.log("Hoy es martes");
        break;
    case 'miercoles':
        console.log("Hoy es miercoles");
        break;
    case 'jueves':
        console.log("Hoy es Jueves");
        break;
    case 'viernes':
        console.log("Hoy es viernes");
        break;
    default:
        console.log("Es fin de semana");
        break;
}