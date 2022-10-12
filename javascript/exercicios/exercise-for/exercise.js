
const numero = parseInt(prompt("Digite quantos números deseja inserir: "))
let soma = 0, valor

for(let contador=1; contador<=numero; contador++){

    valor = parseInt(prompt(`Digite um valor: `))
    soma = soma + valor
}
alert("A soma entre os valores é: " + soma)
let media = soma/numero
alert("A média entre os valores é: " + media)