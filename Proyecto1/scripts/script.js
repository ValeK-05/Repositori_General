//Variables

const preguntas = ["🤢😡😃😭😨👧","🎈🏠🏞️👴👦🐶","🌹👸🦁🏰🕯️🕰️","👸🍎🏰🎶🍳🤴","🤠🚀🌌🧸🤖👨‍🚀","🐼🥋🍜💪🎋🔥","🚗🔴🏁🏎️💨🚦","👸💄👠🎀👜💅","🍌👓💛😂👷‍♂️🍔 ","🐠🌊🐟🐋🚤🗺️"];

const opciones = [["Intensamente","Los increibles","Los Minions","Red"],["Tarsán","Up","Bolt","Coco"],["La Bella Durmiente","Blanca Nieves","La Bella y la Bestia","Peter Pan"],["La Bella Durmiente","Aladín","Barbie","Blanca Nieves"],["Toy Story","Grandes Heroes","Ralph el Demoledor","Chiken Little"],["Kung Fu Panda","Tierra de osos","Madagascar","La Era de Hielo"],["Turbo","Cars","Aviones","Bolt"],["Barbie","Encanto","La Bella Durmiente","Juego de gemelas"],["Zootopia","Los Minions","Bee Movie","El Libro de la Selva"],["Luca","La sirenita","Moana","Buscando a Nemo"]];

const clave = [
    [10,0,0,0],
    [0,10,0,0],
    [0,0,10,0],
    [0,0,0,10],
    [10,0,0,0],
    [10,0,0,0],
    [0,10,0,0],
    [10,0,0,0],
    [0,10,0,0],
    [0,0,0,10],
];

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
    puntaje = clave[i][valor]+puntaje;

    i=i+1;

    if(preguntas.length>i){
        mostrarPregunta();
    }else{
        mostrarPuntaje();
    }
};

function mostrarResultado(){
    
}