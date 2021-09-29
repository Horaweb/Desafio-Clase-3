let operacion = prompt("Escriba con letras el nombre de una operación matemática a realizar:")

while( operacion != "ESC"){
    var primerNum = parseInt(prompt("Ingrese un número"));
    var segundoNum = parseInt(prompt("Ingrese otro número"));

    if(operacion == "SUMA"){
        console.log (primerNum + segundoNum);
    }
    
    else if(operacion == "RESTA"){
        console.log (primerNum - segundoNum);
    }
    
    else if(operacion == "MULTIPLICACION"){
        console.log (primerNum * segundoNum);
    }
    
    else if(operacion == "DIVISION"){
        console.log (primerNum / segundoNum);
    }
    else{
        console.log("Bad Entry")
    }
operacion = prompt ("Ingrese otra operación matemática a realizar -EN MAYUSCULA-:")
}