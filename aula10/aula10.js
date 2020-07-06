function carregar() { 
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date ()
    var hora = data.getHours()
    //var hora = 19
    msg.innerHTML = `Agora sao ${hora} horas`
    if (hora >= 0 && hora < 12) {
        // BOM DAI
        img.src = 'morning.png'
        document.body.style.background = '#e9df01'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.src = 'afternoon1.png'
        document.body.style.background = '#ff8200'
    } else {
        // BOA NOITE
        img.src = 'night1.png'
        document.body.style.background = '#000000'
    }   

}