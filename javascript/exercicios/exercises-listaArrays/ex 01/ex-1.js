let alturaInformada, c, armazeneAltura = [], i, menorAltura=999, maiorAltura=0

for(c=0;c<3;c++){

    alturaInformada = parseFloat(prompt("Digite sua altura "))
    armazeneAltura[c] = alturaInformada
}

for(cont=0;cont<armazeneAltura.length;cont++){
    if(armazeneAltura[cont]<menorAltura){
        menorAltura = armazeneAltura[cont]
    }
    if(armazeneAltura[cont]>maiorAltura){
        maiorAltura = armazeneAltura[cont]
    }
}
alert (`A maior altura inserida foi ${(maiorAltura)} cm`)
alert (`A menor altura inserida foi ${(menorAltura)} cm`)