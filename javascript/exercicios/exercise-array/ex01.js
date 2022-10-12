let lerNumero = [], quantidadePares=0, quantidadeImpares=0, impares=[], pares = [], numero, armazenaNumero, tamanho=6

for(contador=0;contador<tamanho;contador++){
     numero = parseInt(prompt("Digite um número qualquer "))
     lerNumero[contador] = numero
}

for(contador=0; contador< lerNumero.length; contador++){
    if (lerNumero[contador] % 2 == 0){

        pares[quantidadePares] = lerNumero[contador]
        quantidadePares = quantidadePares + 1
    } else{
        impares[quantidadeImpares] = lerNumero[contador]
        quantidadeImpares = quantidadeImpares + 1
    }
}
alert(`A Quantidade de número ímpares é  ${quantidadeImpares} `)
alert(`A Quantidade de número pares é  ${quantidadePares} `)

for(contador=0;contador<pares.length;contador++){
    document.write(`${pares[contador]} `)
}
document.write(` são números pares `)

for(contador=0;contador<impares.length;contador++){
    document.write(`${impares[contador]} `)
}
document.write(` são números ímpares`)