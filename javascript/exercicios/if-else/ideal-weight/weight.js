const sex = prompt("Digite o sexo: ")



if (sex === `f`){
    const height = Number (prompt("Digite a altura: "))
    
    idealWeight = (62.1 * height) - 44.7
    alert (`Seu peso ideal é ` + Math.round(idealWeight) + `kg`)
}
else if (sex === `m`){
    const height = Number (prompt("Digite a altura: "))

    idealWeight = (72.7 * height) - 58
    alert (`Seu peso ideal é ` + Math.round(idealWeight) + `kg`)
}
else{
    alert(`Digite uma opção válida`)
}