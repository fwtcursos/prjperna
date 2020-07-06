function contar() {
    var inicio = document.getElementById('txts')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var resultado = document.getElementById('res')


    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Adicione um numero primeiro'
        //window.alert('Faltam dados!')

    } else {
       resultado.innerHTML = 'Contando: <br> '
       var i = Number(inicio.value)
       var f = Number(fim.value)
       var p = Number(passo.value)
       if(p <= 0) {
           window.alert('Passo invalido!')
           p = 1
       }
        if(i < f) {
            // CONTAGEM CRESCENTE
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
        }               
    } else {
            //CONTAGEM DECRESCENTE
        for(let c = i; c >=f; c-= p) {
        res.innerHTML += `${c} \u{1F449}`        
        }
        }res.innerHTML += `${c} \u{1F3C1}`
    }
}
