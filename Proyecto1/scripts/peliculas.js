const preguntas = [

    '🤡🔪🎈🎈🎈🎈',
    '🚢🌊⚓️❤️🎻🌅',
    '🕷️🕸️🦸‍♂️🌆🏙️🕷️',
    '🍫🏭🍭🎩🍬🍪',
    '👶🍼🏀🍔🚗😂',
    '🌍🦍🚀🔬🐒🌿',
    '👠🐶🎨💄🖤🕶️',
    '🥋👦🎋👊🏆👴',
    '🏎️💨🚓🚨🔥🏁',
    '⚔️🏴‍☠️🌊🚢💰',
]
const opciones = [

    ['Stitches', 'It', 'Clownhouse', '31'],
    ['Titanic', 'Sirenita', 'Oceanos', 'Lejos del mar'],
    ['La telaraña de Charlot', 'Bob el constructor', 'Spiderman','Araña'],
    ['Home', 'Dulce Familia', 'Charli y la fabrica de chocolate', 'La cosa mas dulce'],
    ['Son como niños','Shrek', 'Mamá o Papá', 'Sing'],
    ['Monos', 'Planeta de los simios', 'El reino de los monos', 'King kong'],
    ['Malefica', 'Barbie', 'Cruella', 'Blanca nieves'],
    ['Kung fu panda', 'El luchador', 'The Hammer', 'Karate Kid'],
    ['Toy story', 'Rapidos y Furiosos', 'Interestelar', 'AL PACINO'],
    ['Invicto', 'Piratas del Caribe', 'Buscando a Dory', 'Unidos'],

]

const clave = [

    [0, 10, 0, 0],
    [10, 0, 0, 0],
    [0, 0, 0, 10],
    [0, 0, 10, 0],
    [10, 0, 0, 0],
    [0, 10, 0, 0],
    [0, 0, 10, 0],
    [0, 0, 0, 10],
    [0, 10, 0, 0],
    [0, 10, 0, 0],
]

var i = 0;
var puntaje = 0;

//Funciones

function mostrarPregunta(){
    document.getElementById("pregunta").innerHTML=preguntas[i];
    document.getElementById("op1").innerHTML=opciones[i][0];
    document.getElementById("op2").innerHTML=opciones[i][1];
    document.getElementById("op3").innerHTML=opciones[i][2];
    document.getElementById("op4").innerHTML=opciones[i][3];
}

function mostrarPuntaje(valor){
    if(valor!=-1){
        puntaje = clave[i][valor]+puntaje;
    }
   
    

    i=i+1;

    if(preguntas.length>i){
        mostrarPregunta();
    }else{
        mostrarResultado();
    }
};

function mostrarResultado(){
    localStorage.setItem("puntaje",puntaje)
    location.href="Puntaje.html"
}

//Eventos

document.getElementById("op1").addEventListener("click", function(){
    mostrarPuntaje(0);
})
document.getElementById("op2").addEventListener("click",function(){
    mostrarPuntaje(1);
})
document.getElementById("op3").addEventListener("click",function(){
    mostrarPuntaje(2);
})
document.getElementById("op4").addEventListener("click",function(){
    mostrarPuntaje(3);
})
document.getElementById("siguiente").addEventListener("click",function(){
    mostrarPuntaje()
})


mostrarPregunta()