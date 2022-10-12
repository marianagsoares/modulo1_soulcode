let ArmazenaNumero = [], valorInformado, pares= [], impares = [], i, cont
let 
for(cont=1;cont<=6;cont++)
    {
    valorInformado = parseInt(prompt(`Digite o  ${cont}ª valor`))
    ArmazenaNumero.push(valorInformado)
    }

//separar os pares dos ímpares
//criaremos uma variável (i) que irá percorrer a lista (armazenaNumero)
//for of serve apenas pra trabalhar interações dentro de arrays
for(i of ArmazenaNumero){
    if (i % 2 == 0){
        pares.push(i)
    }
    else{
        impares.push(i)
    }

}
alert(`Existem ${pares.length} números pares: ${pares.join(`, `)}`)
alert(`Existem ${impares.length} números ímpares: ${impares.join(`, `)}`)
//length vai em dizer qual o tamanho do array
//join vai me mostrar quais são esses valores
