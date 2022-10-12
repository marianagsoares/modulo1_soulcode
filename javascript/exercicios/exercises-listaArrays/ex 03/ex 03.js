let anoInformado, listaAnos = [], naoBissexto = [], bissexto = []


for(cont=1;cont<=4;cont++){
     anoInformado = parseInt(prompt(`Digite o ${cont} ano`))
        listaAnos.push(anoInformado)
   
        /*div 4 por 100 e por 400*/
    if((anoInformado % 4 == 0) && (anoInformado % 100 == 0) && (anoInformado % 400 ==0)){ 
        console.log(`${anoInformado} é bissexto`)

    }
        /*div por 4 e 400*/
    //else if(anoInformado % 4 == 0 && anoInformado % 400 ==0){
    //    console.log(`${anoInformado} é bissexto`)
    //}
    else if((anoInformado % 4 ==0) && (anoInformado % 100>0 && anoInformado % 100<=99)){ 
        /*div por 4 e não por 100*/
        console.log(`${anoInformado} é bissexto`)
    }
    else{
        console.log(`${anoInformado} NÃO é bissexto`)
    }
}

