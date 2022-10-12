const lado1 = Number(prompt(" Digite o lado1 do triângulo: "))
const lado2 = Number(prompt(" Digite o lado2 do triângulo: "))
const lado3 = Number(prompt(" Digite o lado3 do triângulo: "))

const triangulo = ((lado1 + lado2 > lado3) && (lado1 + lado3 > lado2) && (lado2 + lado3 > lado1))
//A soma de dois lados deve ser maior que a medida do terceiro lado.

const perimetrotriangulo = lado1 + lado2 + lado3

if (triangulo) {
    if ((lado1 == lado2) && (lado2 == lado3)) {
        alert("O perímetro do triângulo equilátero é " + perimetrotriangulo);
    }
    else if ((lado1 == lado2) && (lado1 != lado3) || (lado1 == lado3) && (lado1 != lado2) || (lado2 == lado3) && (lado2 != lado1)) {
        alert("O perímetro do triângulo isóceles é: " + perimetrotriangulo)
    }
    else {
        alert("O perímetro do triângulo escaleno é: " + perimetrotriangulo)
    }
}
else {
    alert("Os valores indicados não formam um triângulo")
}