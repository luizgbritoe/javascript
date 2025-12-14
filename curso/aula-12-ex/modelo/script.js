function carregar() {
    var hora = document.getElementById('hora')
    var imagem = document.getElementById('img')
    var mensagem = document.getElementById('msg')
    var data = new Date()
    var horario = 8

    hora.innerHTML = `<p>Agora são ${horario} horas.</p>`

    if (horario >= 6 && horario < 12) {
        imagem.src = 'imagens/manha.jpg'
        document.body.style.background = '#F2C36B'
        hora.style.background = '#F2C36B'
        hora.style.color = 'black'
        mensagem.innerHTML = '<p>Bom dia!</p>'

    } else if (horario >= 12 && horario < 18) {
        imagem.src = 'imagens/tarde.jpg'
        document.body.style.background = '#D9704A'
        hora.style.background = '#D9704A'
        mensagem.style.color = 'black'
        document.body.style.color = 'white'
        mensagem.innerHTML = '<p>Boa tarde!</p>'

    } else {
        imagem.src = 'imagens/noite.jpg'
        document.body.style.background = '#142740'
        hora.style.background = '#142740'
        mensagem.style.color = 'black'
        document.body.style.color = 'white'
        mensagem.innerHTML = '<p>Boa noite!</p>'
    }
}