veloMaxima= parseInt(prompt("Digite a velocidade máxima permitida na via"))
veloMotorista= parseInt(prompt("Digite a velocidade em que o motorista dirige"))


if( veloMotorista>veloMaxima && veloMotorista <= veloMaxima + 10){
    alert(`Sua velocidade foi de ${veloMotorista}km/h. \n Você pagará uma multa no valor de $50 reais`)
}
else if(veloMotorista>veloMaxima && veloMotorista>=veloMaxima + 11 && veloMotorista<= veloMaxima + 30){
    alert(`Sua velocidade foi de ${veloMotorista}km/h. \n Você pagará uma multa no valor de $100 reais`)
}
else if (veloMotorista>veloMaxima && veloMotorista >= veloMaxima + 31){
    alert(`Sua velocidade foi de ${veloMotorista}km/h. \n Você pagará uma multa no valor de $200 reais`)
}
else{
    alert(`Você não ultrapassou a velocidade máxima permitida`)
}
/*(veloMotorista = veloMaxima || veloMotorista < veloMaxima)*/