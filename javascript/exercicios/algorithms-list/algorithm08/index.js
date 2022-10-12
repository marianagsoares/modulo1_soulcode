alert("Vamos calcular o volume de uma lata de óleo!")

const raio = Number (prompt(" Digite o valor do raio: "))
const altura = Number (prompt(" Digite da altura: "))

const pi = 3.14

const volume = pi * Math.pow(raio, 2) * altura

const volumeArredondado = Math.round(volume)

alert("O volume é: " + volumeArredondado + " m3")


//alert ("O volume é: " + Math.round(volume) + "m3")

//Math.round() arredonda o valor que é solicitado. 
//valor >=5 é arrendondado para cima. valor <5 arrendado para baixo.

