var nums = []

function adicionar() {

    var num = document.getElementById('txt-n')
    var lista = document.getElementById('lista')

    if (isNumero(num.value) && !inLista(num.value, nums)) {
        alert('OK')
    } else {
        alert('Valor inválido ou já adicionado na lista.')
    }

    /*if (num.value.length == 0) {
        alert('[ERRO] Verifique os dados inseridos e tente novamente.')
    } else {
        var n = Number(num.value)
        nums.push(n)
        var item = document.createElement('option')
        item.text = `Valor ${n} adicionado.`
        lista.appendChild(item)
    }*/
}

function finalizar() {
    var resultado = document.getElementById('resultado')

    resultado.innerHTML += `<p>Ao todo, temos ${nums.length} números cadastrados.</p>`
    nums.sort()
    resultado.innerHTML += `<p>O menor valor informado foi ${nums[0]}</p>`
}

function isNumero (n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista (n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}