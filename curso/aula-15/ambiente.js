let num = [1, 2, 3, 4]
num.push(5)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
var pos = num.indexOf(6)
if (pos == -1) {
    console.log('Esse valor não foi encontrado dentro desse vetor')
} else {
    console.log(`Esse valor está na posição ${pos}`)
}