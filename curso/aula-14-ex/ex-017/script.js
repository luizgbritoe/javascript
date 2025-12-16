function tabuada() {
    var num = document.getElementById('num')
    var resultado = document.getElementById('resultado')

    if (num.value.length == 0) {
        alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var n = Number(num.value)
        resultado.innerHTML = ''
        for (var c = 1; c <= 10; c++) {
            resultado.innerHTML += `${n} x ${c} = ${n*c}<br>`
        }
    }
}