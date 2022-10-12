alert("Código Funcionando") // ALERT SO MOSTRA A MENSAGEM

const nomeUsuario = prompt ("Digite seu nome: ") //ACEITA RECEBER UM VALOR SEJA STRING OU NUMÉRICO

let numero = Number (prompt("Olá, " + nomeUsuario + "!" + " Digite um número: "))

//const sucessor = numero++
//alert ("O sucessor de " + numero + " é " + sucessor)


//console.log(numero++) //VAI APARECER O MUMERO QUE EU DIGITEI (SUPONHA 5)
//console.log(numero) // VAI APARECER O NUMERO DIGITADO + 1, OU SEJA, 6
//console.log(++numero)//VAI APARECER O NUMERO QUE JÁ ESTÁ SOMADO (6) E A ELE VAI SE SOMAR +1, OU SEJA, 7

console.log(numero++) //SUPONHA (5) VAI ESCREVER 5 NA TELA E SÓ DEPOIS SOMAR + 1
console.log(++numero) // 6 + 1 E SO DEPOIS IRÁ ESCREVER NA TELA 7
//console.log(numero = numero + 1)

console.log(numero--) //VAI ESCREVER 7 E SÓ DEPOIS SUBTRAIR UM
console.log(numero)// VAI ESCREVER 6 POIS ANTERIORMENTE FOI SOMADO + 1




