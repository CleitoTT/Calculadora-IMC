function calculoImc(){
    let altura = parseFloat(document.getElementById('altura').value)
    let peso = parseFloat(document.getElementById('peso').value)

    let imc = peso / altura ** 2

    if (imc < 18.5){
        document.getElementById('retorno').innerText= `Seu IMC é de ${Math.round(imc)}`
        document.getElementById('abaixo').style.backgroundColor= '#66b3ff'
        document.getElementById('abaixo1').style.backgroundColor= '#66b3ff'
    }
    else if (imc >=18.5 && imc < 25){
        document.getElementById('retorno').innerText= `Seu IMC é de ${Math.round(imc)}`
        document.getElementById('normal').style.backgroundColor= '#008000'
        document.getElementById('normal1').style.backgroundColor= '#008000'
    }
    else if (imc >=25 && imc < 30){
        document.getElementById('retorno').innerText= `Seu IMC é de ${Math.round(imc)}`
        document.getElementById('excesso').style.backgroundColor= '#ffff00'
        document.getElementById('excesso1').style.backgroundColor= '#ffff00'
    }
    else if (imc >= 30 && imc < 35){
        document.getElementById('retorno').innerText= `Seu IMC é de ${Math.round(imc)}`
        document.getElementById('obeso').style.backgroundColor= '#cc6600'
        document.getElementById('obeso1').style.backgroundColor= '#cc6600'
    }
    else{
        document.getElementById('retorno').innerText= `Seu IMC é de ${Math.round(imc)}`
        document.getElementById('extremo').style.backgroundColor= '#992600'
        document.getElementById('extremo1').style.backgroundColor= '#992600'
    }
}
