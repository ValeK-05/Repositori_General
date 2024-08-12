//Variables

const preguntas = ["¿Con qué frecuencia realizas deporte?<br>Considera como deporte cualquier actividad que acelere tu ritmo cardiaco, como caminar rápido,andar en bicicleta, bailar o, por supuesto, practicar un deporte.","¿Cuantos vasos de agua (200ml) bebes al dia?<br>No consideres la ingesta de otros líquidos, como gaseosas, jugos azucarados o alcohol.", "¿Cuántas porciones de frutas y verduras consumes diariamente?"];

const opciones = [["3 ó más veces por semana", "Entre 1 y 2 veces a la semana", "Al menos 4 veces al mes"],["Al menos 8 vasos al día", "Entre 5 y 8, depende del diá", "Cuando me acuerdo"],["5 ó más", "2 a 4","Al menos 1 vez al día"]];

const clave =[
    [5,4,3],
    [5,4,3],
    [5,4,3],
];

var indicePregunta = 0;
var puntaje = 0;
var intervalo;


//Eventos

document.getElementById("op1").addEventListener("click",function(){
    actualizarPuntaje(0);
});
document.getElementById("op2").addEventListener("click",function(){
    actualizarPuntaje(1);
});

document.getElementById("op3").addEventListener("click",function(){
    actualizarPuntaje(2);
});

//Funciones

function mostrarPreguntas(){
    document.getElementById("pregunta").innerHTML= preguntas[indicePregunta];
    document.getElementById("op1").innerHTML=opciones[indicePregunta][0];
    document.getElementById("op2").innerHTML=opciones[indicePregunta][1];
    document.getElementById("op3").innerHTML=opciones[indicePregunta][2];
    iniciarCronometro();
};

function iniciarCronometro(){
    const duracion = 15;
    const cronometro = document.getElementById("cronometro");
    iniciarTiempo(duracion, cronometro);
};

function iniciarTiempo(tiempo, elemento){
    intervalo=setInterval(() => {
        if(tiempo==0){
            clearInterval(intervalo);
            indicePregunta=indicePregunta+1;
            mostrarPreguntas();
        }else{
            tiempo=tiempo-1;
            elemento.textContent ="00"+tiempo;
        }
    }, 1000);
}

function actualizarPuntaje(valor){
    puntaje = clave[indicePregunta][valor] + puntaje;

    indicePregunta=indicePregunta+1;
    if(preguntas.length>indicePregunta){
        mostrarPreguntas();
    }else{
        mostrarResultado();
    }
};

function mostrarResultado(){
    document.getElementById("titulo").innerHTML="Resultado"
    document.getElementById("contenido").innerHTML=`
    <p class="resultado">Tu puntaje es de: ${puntaje}</p>
    `;
};





mostrarPreguntas();