
const productPrice = parseFloat(prompt('Digite o valor do produto: '))

let payment = parseInt(prompt("digite a forma de pagamento\n" + `1) PARA PAGAR EM DINHEIRO 
2) PARA PAGAR EM CHEQUE
3) PARA PAGAR NO CARTÃO`))

while(payment>3 || payment == 0  || isNaN(payment)){
    alert("Número iválido\n Digite um número válido para continuarmos")
    
    payment = parseInt(prompt("digite a forma de pagamento\n" + `1) PARA PAGAR EM DINHEIRO 
    2) PARA PAGAR EM CHEQUE
    3) PARA PAGAR NO CARTÃO`))
}

if (payment == 1 || payment == 2) {
    finalPrice = productPrice * 0.9
    alert('Você recebeu 10% de desconto nesse produto \n O preço final é ' + finalPrice)
}
else if (payment == 3) {

    const menu = Number(prompt(`
    1) PARA PAGAR A VISTA NO CARTÃO
    2) PARA PAGAR NO CARTÃO EM 2X
    3) PARA PAGAR NO CARTÃO EM 3X OU MAIS`))

    if (menu == 1) {
        finalPrice = productPrice * 0.85
        alert('Você recebeu 15% de desconto \n O preço final é ' + finalPrice)
    }
    else if (menu == 2) {
        finalPrice = productPrice
        alert ('Você não recebeu desconto nesse produto\n O preço final é ' + finalPrice)
    }
    else {
        finalPrice = productPrice + productPrice * 0.10
        alert ('Será acrescido 10% de juros nesse produto\n O preço final é ' + finalPrice)
    }
}