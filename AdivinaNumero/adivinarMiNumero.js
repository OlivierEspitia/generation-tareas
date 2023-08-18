console.log("que tranza")

let min = 1;
let max = 100;

function adivinaElNumero (){
    let adivinar = Math.floor((min + max) / 2);
    
    if(confirm(`¿tu numero es ${adivinar}?`)){
        document.getElementById("resultado").innerHTML = `Tu numero es el ${adivinar}, lo lograste!`;
    } else {
        if(confirm(`tu numero es mayor que ${adivinar}`)) {
            min = adivinar + 1;
        } else {
            max = adivinar - 1;
        }
        adivinaElNumero();
    }
}

