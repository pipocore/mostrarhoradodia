var msg = window.document.getElementById('mensagem');
var img = window.document.getElementById('imagem')
var hoje = new Date();
var hora = hoje.getHours()
function mudarHora () {
if (hora > 0 && hora < 6) {
img.src = 'madrugada.jpg'    
tempo = 'madrugada'
}
else if (hora >= 6 && hora < 12) {
img.src = 'manhã.jpg'
tempo = 'manhã'
}
else if (hora >= 12 && hora < 18) {
img.src = 'tarde.jpg'
tempo = 'tarde'
}
else {
img.src = 'noite.jpg'
tempo = 'noite'
}
msg.innerHTML = `Agora são ${hora} horas da ${tempo}.`
}