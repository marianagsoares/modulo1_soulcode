
let preco, armazenaPreco = [], somaPreco=0, maiorPreco=0, menorPreco=999

const quantidadeProdutos = parseInt(prompt("Digite a quantidade de produtos que deseja comprar: "))

for(contador=0;contador<quantidadeProdutos;contador++){

    preco = parseFloat(prompt("Digite o preço do produto: "))
      armazenaPreco[contador] = preco
}

for(contador=0;contador<quantidadeProdutos;contador++) {
     somaPreco = somaPreco + armazenaPreco[contador]
     if (armazenaPreco[contador]> maiorPreco){
        maiorPreco = armazenaPreco[contador]
    }
    if  (armazenaPreco[contador] < menorPreco){
        menorPreco = armazenaPreco[contador]
    }
}

alert(`A soma dos valores da sua lista é:  ${somaPreco}\n`)
alert(`O maior valor da sua lista é: ${maiorPreco}\n`)
alert(`O menor valor da sua lista é:  ${menorPreco}\n`)