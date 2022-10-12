const productPrice = parseFloat (prompt('Digite o valor do produto: '))

const menu = Number (prompt(`1) para pagar em dinheiro ou cheque
2) para pagar à vista no cartão
3) para dividir em 2x no cartao
4) para dividr em 3x ou mais no cartão`))


switch(menu) {
    case 1:
        descont1 = productPrice * 0.1
        alert(`você recebeu 10% de desconto\n O valor a ser pago é: ` + (productPrice - descont1))
        //*const descont1 = productPrice - (productPrice * 0.1)
       //* alert(descont1);
    break

    case 2: 
        descont2 = productPrice * 0.15
        alert(`Você recebeu 15% de desconto\n O valor a ser pago é ` + (productPrice - descont2))
    break

    case 3:
        alert(`Você não recebeu desconto nessa compra\n O valora ser pago é ` + productPrice)
    break

    case 4:
        newPrice = productPrice + productPrice * 0.1
        alert(`Será acrescido 10% ao valor do produto\n O valor a ser pago é ` + newPrice)
}
