const nomeUsuario = prompt('Digite seu nome ')
const CPF = Number (prompt('Digite seu CPF '))
const idade = parseInt(prompt('Digite sua idade: '))
//o parsetInt ignora todas as casas depois do ponto. 4.5 = 4
//O number considera as casas depois do ponto 8.55 = 8.55

alert(`Seu nome é ${nomeUsuario} e sua idade é ${idade}`)
alert("Olá, minha idade é " + (20 + 5))
alert(`Sua idade é ` + (5 + idade))
alert('Olá, sua idade é ' + 25 + ' anos')
//CONCATENAM
alert("Olá, minha idade é " + 20 + 5);
//NAO CONCATENA



alert((40 + idade + " anos é a idade que possui"))
alert("sua idade é " + 5 + idade)

const texto = 'Javascript é uma Otima Ferramenta Javascript'
console.log(texto)
console.log(texto.concat('HTML também é uma execelente ferramenta'))
console.log(texto.toLowerCase())
console.log(texto.toUpperCase())
console.log(texto[2], texto[5], texto[3])

console.log(texto.substring(0, 11))
console.log(texto.replace("Javascript", "rust"))
//com case sensitive troca apenas a primeira palavra
//substitui apenas a primeira ocorrencia
console.log(texto.replaceAll("Javascript", "linguagem de programação"))
//com casesensitive troca todas as palavras

console.log(texto.replace(/javascript/g, "PHP"))
//vai procurar a palavra javacript de maneira global, sem casesensitive e vai trocar por PHP
console.log(texto.replace(/javascript/gi, "PHP"))

const html = "<!DOCTYPE html>\n<html><html>"
console.log(html.startsWith("<!DOCTYPE html>"))

const mensagem = '                      olá, mundo                '
console.log(mensagem)
console.log(mensagem.trim())
//faz a exclusao dos espacos

let senha = 'sonic'
console.log(senha.length)
console.log(senha.length >=8)
//sonic nao possui 8 ou mais caracteres