function verificar() {
    var data = new Date()

    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.lenght == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName ('radsex')
        var idade = ano - Number(fano.value)
        var genereo = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genereo = 'Homem'
            if (idade >= 4 && idade < 10) {
                img.setAttribute('src', 'boy.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'man.png')
            } else if (idade >=60) {
                img.setAttribute('src', 'olderman.png')
            } else {

            }
        } else if (fsex[1].checked) {
            genereo = 'Mulher'
            if (idade >= 4 && idade < 10) {
                img.setAttribute('src', 'girl.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'woman.png')
            } else if (idade >=60) {
                img.setAttribute('src', 'olderwoman.png')
            } else {
                
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genereo} com ${idade} anos.`
        res.appendChild(img)
    }

}