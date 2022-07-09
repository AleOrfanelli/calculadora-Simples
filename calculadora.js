
var result = document.getElementById('result')
var txt1 = document.getElementById('txt1')
var txt2 = document.getElementById('txt2')
var divnumber = document.getElementsByClassName('divnumber')
function calcular() {
    var som = document.getElementById('somar')
    var sub = document.getElementById('subtrair')
    var div = document.getElementById('dividir')
    var mult = document.getElementById('multiplicar')
    var operacao = document.getElementById('operacao')
    var num1 = Number(txt1.value)
    var num2 = Number(txt2.value)
    var oper = String(operacao.value)
    var sub = String(sub.value)
    var som = String(som.value)
    var div = String(div.value)
    var mult = String(mult.value)
    if (oper == som) {
        result.innerHTML = num1 + num2
    } else if (oper == sub) {
        result.innerHTML = num1 - num2
    } else if (oper == div) {
        result.innerHTML = num1 / num2
    } else {
        result.innerHTML = num1 * num2
    }

}

function limpar() {
    result.innerHTML = "Resultado..."
}
