const n1 = Number (prompt(" Digite um número: "))
const n2 = Number (prompt(" Digite outro número: "))

const coeficiente = n1 / n2
alert ("O coeficiente de " + n1 +  "/" + n2 + " é: " + Math.floor(coeficiente))

const resto = n1 % n2
alert("O resto da divisão inteira de " + n1 + " e " + n2 + " é: " + resto)