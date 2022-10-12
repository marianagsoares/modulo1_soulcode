let somaclick=0
function mostrarAlerta() {
    const divAlerta = document.getElementById('alerta')
    divAlerta.classList.add('mostrar')
    somaclick++
   document.getElementById("cont").textContent= somaclick;
    if(somaclick == 1){
        document.getElementById("plural").textContent= "vez";
    }
    else{
        document.getElementById("plural").textContent = "vezes";
    }
}

function fecharAlerta() {
    const divAlerta = document.getElementById('alerta')
    divAlerta.classList.remove('mostrar')
}

const btnMostrar = document.getElementById('mostrar')
const btnFechar = document.getElementById('fechar')

btnMostrar.addEventListener('click', mostrarAlerta)
btnFechar.addEventListener('click', fecharAlerta)