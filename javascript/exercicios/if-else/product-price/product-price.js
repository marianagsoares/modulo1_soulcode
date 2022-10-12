const productPrice = parseFloat(prompt('Digite o valor do produto: '))

const menu = Number(prompt(`1) PARA PAGAR AVISTA EM DINHEIRO OU CHEQUE
2) PARA PAGAR NO CARTÃO`))


if (menu == 1) {
    finalPrice = productPrice * 0.9
    alert('Você recebeu 10% de desconto nesse produto \n O preço final é ' + finalPrice)
}
else if (menu == 2) {

    const cardPayment = Number(prompt(`
    1) PARA PAGAR A VISTA NO CARTÃO
    2) PARA PAGAR NO CARTÃO EM 2X
    3) PARA PAGAR NO CARTÃO EM 3X OU MAIS`))

    if (cardPayment == 1) {
        finalPrice = productPrice * 0.85
        alert('Você recebeu 15% de desconto \n O preço final é ' + finalPrice)
    }
    else if (cardPayment == 2) {
        finalPrice = productPrice
        alert ('Você não recebeu desconto nesse produto\n O preço final é ' + finalPrice)
    }
    else {
        finalPrice = productPrice + productPrice * 0.10
        alert ('Será acrescido 10% de juros nesse produto\n O preço final é ' + finalPrice)
    }
}