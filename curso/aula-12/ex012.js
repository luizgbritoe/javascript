var agora = new Date()
var horario = agora.getHours()
console.log(`Agora são exatamente ${horario}h.`)
if (horario < 12 && horario >= 6) {
    console.log('Bom dia!')
} else if (horario >=12 && horario < 18) {
    console.log('Boa tarde!')
} else if (horario >= 18 && horario <= 24){
    console.log('Boa noite!')
} else {
    console.log('Boa madrugada!')
}