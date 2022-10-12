const weight = parseFloat(prompt(`Digite seu peso: `))
const height = parseFloat (prompt(`Digite sua altura: `))

const imc = weight / (Math.pow(height, 2))

if(imc < 18.5){
    alert(`Você está abaixo do peso ideal`)
}else if( imc>18.5 && imc<=25){
    alert(`Você está no peso ideal`)
}else if(imc>25 && imc<=30){
    alert(`Você está acima do peso`)
}else{
    alert(`Você está obeso\n Procure um médico urgente!`)
}