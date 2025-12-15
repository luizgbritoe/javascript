function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var anoForm = document.getElementById('ano-nasc')
    var resultado = document.getElementById('resultado')
    if (anoForm.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var sexo = document.getElementsByName('sexo')
        var idade = ano - anoForm.value
        resultado.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/bebe-masculino.jpg')
                img.setAttribute('class', 'crianca')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovem-masculino.jpg')
                img.setAttribute('class', 'jovem')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adulto.jpg')
                img.setAttribute('class', 'adulto')
            } else {
                img.setAttribute('src', 'imagens/idoso.jpg')
            }
        } else if (sexo[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/bebe-feminino.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovem-feminino.jpg')
                img.setAttribute('class', 'jovem-mulher')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adulta.jpg')
            } else {
                img.setAttribute('src', 'imagens/idosa.jpg')
                img.setAttribute('class', 'idosa')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `<p>Detectamos ${genero} com ${idade} anos</p>`
        resultado.appendChild(img)
    }
} 