/* alert('Esta aqui porque nao sabe tabuada VAGABUNDO!') */

function tabuada() {
    var num = document.getElementById('txt')
    var tab = document.getElementById('txtt')
    if (num.value.lenght === null ) {
        window.alert('Digite algum numero!')              
    } else {
        var numero = Number(num.value)
        var contador = 1
        tab.innerHTML = " " // Irá limpar o campo para proxima conta
        while (contador <= 10) {
            var item = document.createElement('option')
            item.text = `${numero} x ${contador} = ${numero*contador}`
            tab.appendChild(item)
            contador++
        }
    }  

}