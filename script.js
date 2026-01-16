function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora São ${hora} Horas`
    if(hora >= 0 && hora <= 12){
        img.src = 'Manha.jpg'
        document.body.style.background = ' #f9d487'
    } else if (hora >= 12 && hora < 18){
        img.src = 'Tarde.jpg'
        document.body.style.background = '#beb7a7'
    }else {
        img.src = 'Noite.jpg'
        document.body.style.background = '#191970'
    }
}