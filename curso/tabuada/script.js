function tabuada(){
    var num = document.getElementById('txt-n')
    var resultado = document.getElementById('resultado')

    if (num.value.length == 0) {
        alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var n = Number(num.value)
        resultado.innerHTML = ''
        for (var c = 1; c <= 10; c++) {
            resultado.innerHTML += `<p>${n} x ${c} = ${n * c}</p>`
        }
    }
}