var puntaje=localStorage.getItem("puntaje")
document.getElementById("resultado").innerHTML= `
${puntaje}
`
if(puntaje>=70){
    document.getElementById("felicitacion").innerHTML="Felicidades! Lograste adivinar correctamente";
}else if(puntaje>30){
    document.getElementById("felicitacion").innerHTML="Bien hecho!, pero puedes hacerlo mejor";
}else{
    document.getElementById("felicitacion").innerHTML="Vuelve a intentarlo, puedes hacerlo mejor";
};