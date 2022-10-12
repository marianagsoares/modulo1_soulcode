let tipo, hectares, desconto

tipoPraga = parseInt(prompt(`------EMPRESA DE PULVERIZAÇÃO---------
Escolha 1) para pulverizar erva da ninha
 2) para pulverizar gafanhotos
 3) para pulverizar broca
 4) para pulverizar todos acima`))

 hectares = parseFloat(prompt(`Digite quantos hectares deseja pulverizar`))

switch (tipoPraga){
    case 1: 
        valorBruto = 50 * hectares
    break;
    case 2:
        valorBruto = 100 * hectares
    break;
    case 3:
        valorBruto = 150 * hectares
    break;
    case 4:
        valorBruto = 250 * hectares
    break;
}

if(hectares > 1000){
    descontoHectare = valorBruto * 0.05
    valorParcial = valorBruto - descontoHectare
    aplicaDesconto = valorParcial - 750
    valorDesconto = aplicaDesconto * 0.10
    descontoTotal = descontoHectare + valorDesconto
    valorPagoTotal = valorBruto - descontoTotal
    alert(`Você receberá ${descontoTotal} reais de desconto, portanto pagará ${valorPagoTotal} reais`)
}
else if (valorBruto > 750 ){
    aplicaDesconto = valorBruto - 750
    valorDesconto = aplicaDesconto * 0.10
    valorPago = valorBruto - valorDesconto
    alert(`Você recebeu um desconto de ${valorDesconto}, portanto pagará ${valorPago} reais`)
}
else{
    alert(`Você não recebeu qualquer desconto, portanto pagará ${valorBruto} reais`)
}