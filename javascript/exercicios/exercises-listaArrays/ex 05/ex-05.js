
const l1 = parseFloat(prompt("Digite o primeiro lado do triângulo "))
const l2 = parseFloat(prompt("Digite o segundi lado do triângulo "))
const l3 = parseFloat(prompt("Digite o terceiro lado do triângulo "))
const triangulo = l1+l2>l3 && l2+l3>l1 && l1+l3>l2

if(triangulo && l1==l2 && l3==l1){
    alert(`Esse triângulo é equilátero`)
}
else if( triangulo && l1!=l2 && l2!=l3 && l1!=l3){
    alert(`Esse triângulo é escaleno`)
}
else if(triangulo && (l1==l2 && l1 != l3) || triangulo && (l1==l3 && l3!=l2) || triangulo && (l2==l3!=l1))
{
    alert(`Esse triângulo é isóceles`)
}
else{
    alert(`Esse valores não formam um triângulo`)
}