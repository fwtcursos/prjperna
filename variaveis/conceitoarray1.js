let valores = [7, 15, 9, 12, 17, 6, 24, 32, 3, 34, 52, 1, 65, 2, 44, 66, 232, 332, 101, 199, 202, 877,645, 773, 333, 411, 200, 991, 669]
valores.push(1)
valores.sort()
//console.log(valores)
/* console.log(`O vetor tem ${valores.length} posicoes`)
console.log(`O primeiro valor do vetor é ${valores[0]}`) */
let pos = valores.indexOf(16)
if (pos == -1) {
    console.log('O valor nao foi encontrado!')
} else {
    console.log(`O valor esta na posicao ${pos}`)

}

/* for(let valores in num)
 /* for(let posicao=0; posicao < valores.length; posicao++) {
    console.log(`A posicao ${posicao} tem o valor ${valores[posicao]}`)
}  */


/* for(let posicao in valores) {

}
 */ 


