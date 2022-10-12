let valor, cont, razao
valor= parseInt(prompt("Digite um valor para calcular a progressão geométrica"))

razao= parseInt(prompt("Digite o valor da razão"))

for(cont=1; cont<=10;cont++){
    document.write(`${valor} \n`)
    valor = valor * razao
}