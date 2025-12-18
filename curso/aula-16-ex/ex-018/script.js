var valores = []
var num = document.getElementById('txt-n')
var lista = document.getElementById('lista')
var resultado = document.getElementById('resultado')

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

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        resultado.innerHTML = ''
    } else {
        alert('Valor inválido ou já adicionado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar.')
    } else {
        resultado.innerHTML = ''
        resultado.innerHTML += `<p>Ao todo, temos ${valores.length} números cadastrados.</p>`
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        for(var pos in valores) {
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            else if (valores[pos] < menor) {
                menor = valores[pos]
            }
            soma += valores[pos]
        }
        media = soma / valores.length
        resultado.innerHTML += `<p>O maior valor informado foi ${maior}<p>`
        resultado.innerHTML += `</p>O menor valor informado foi ${menor}</p>`
        resultado.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        resultado.innerHTML += `<p>A média dos valores é ${media.toFixed(2)}.</p>`
    }
}