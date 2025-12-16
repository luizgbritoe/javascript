var num = [1, 2, 3, 4, 5, 6, 7, 8]

/*
for (var pos = 0; pos < num.length; pos++) {
    console.log(`Na posição ${pos} está inserido o valor ${num[pos]}`)
}
*/

for(let pos in num) {
    console.log(`Na posição ${pos} está inserido o valor ${num[pos]}`)
}

