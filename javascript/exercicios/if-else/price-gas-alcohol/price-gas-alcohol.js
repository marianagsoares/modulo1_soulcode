
    const C = prompt(`Digite g) para gasolina a) álcool`)
if (C === 'g'){
    const L = parseFloat(prompt(`Digite quantos litros deseja por: `))
    if(L <=25){
        price = L * 2.70
        finalPrice = price - (price * 0.02)
        alert( `Você pagará ` + finalPrice)
    }
    else{
        price = L * 2.70
        finalPrice = price - (price * 0.04)
        alert( `Você pagará ` + finalPrice)
    }

}
else if (C === 'a'){
    const L = parseFloat(prompt(`Digite quantos litros deseja por: `))
        if(L <= 25){
            price = L * 1.90
            finalPrice = price - (price * 0.03)
            alert(`Você pagará ` + finalPrice)
        }
        else{
            price = L * 1.90
            finalPrice = price - (price * 0.05)
            alert (`Você pagará ` + finalPrice)
        }
}


