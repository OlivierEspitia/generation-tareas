function verificarDia(){
    const dia = parseInt(document.getElementById(`dia`).value);
    const mes = parseInt(document.getElementById(`mes`).value) - 1;
    const ano = parseInt(document.getElementById(`ano`).value);
    const resultadoElement = document.getElementById("resultado");


    if (mes < 1 || mes > 12) {
        alert('Mes no válido. Ingrese un mes entre 1 y 12.');
        return;
    }
    if (ano < 1900 || ano > 2100) {
        alert('Año no válido. Ingrese un año entre 1900 y 2100.');
        return;
    }
   
   
let fecha = new Date(ano, mes, dia);
let diaSemana = fecha.getDay();
let mensajeBisiesto = "";

if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    mensajeBisiesto = `  Además, el año ingresado es bisiesto.`;
}
let diaDeLaSemana;

switch (diaSemana){
    case 0:
        diaDeLaSemana = "Domingo";
        break;
    case 1:
        diaDeLaSemana = "Lunes";
        break;
    case 2:
        diaDeLaSemana = "Martes";
        break;
    case 3:
        diaDeLaSemana = "Miércoles";
        break;
    case 4:
        diaDeLaSemana = "Jueves";
        break;
    case 5:
        diaDeLaSemana = "Viernes";
        break;
    case 6:
        diaDeLaSemana = "Sábado";
        break;
}

if (diaSemana >= 1 && diaSemana <= 5) {
    resultadoElement.innerText = `El ${diaDeLaSemana} es un día laborable.${mensajeBisiesto}`;
} else {
    resultadoElement.innerText = `El ${diaDeLaSemana} es fin de semana.${mensajeBisiesto}`;
}
}


