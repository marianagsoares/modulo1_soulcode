const letra = prompt("Digite uma letra").toUpperCase()

if(letra === "A" || letra === "E" || letra === "I" || letra === "O" || letra === "U"){
    alert (`${letra.toUpperCase()} é uma vogal`)
}
else{
    alert (`${letra.toUpperCase()} é uma consoante`)
}
