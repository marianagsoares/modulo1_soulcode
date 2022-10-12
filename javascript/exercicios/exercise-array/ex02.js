let armazenaNumero = [], nunmero, quantidadeNegativos=0, armazenaPositivos = [], quantidadePositivos=0, somaPositivos=0
const quantidade = 3

for(contador=0; contador<quantidade;contador++){

    numero = Number(prompt(`Digite o ${contador + 1} número `))
    armazenaNumero[contador] = numero

    if(armazenaNumero[contador] < 0){

        quantidadeNegativos = quantidadeNegativos + 1
    }else{
        armazenaPositivos [quantidadePositivos] = numero
        somaPositivos = somaPositivos + armazenaPositivos[quantidadePositivos]
        quantidadePositivos++
    }
}
console.log(armazenaNumero)
console.log(armazenaPositivos)

alert(`Existem ${quantidadeNegativos} numeros negativos nessa sequência` )
alert(`A soma dos números positivos é ${somaPositivos}`)
