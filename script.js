function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector("div#res")
    if (fano.value.length == 0 || Number (fano.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ""
        var img = document.createElement('img')
        img.setAttribute("id", "foto")
        img.setAttribute("width", "250")
        img.setAttribute("height", "250")
        if (fsex[0].checked){
            gênero = "Homem"
            if (idade >= 0 && idade < 10){
                //crianca
                img.setAttribute("src", "foto-bebe-h.png")
                document.body.style.background = "#FFFF00"
            } else if (idade < 21){
                //jovem
                img.setAttribute("src", "foto-jovem-h.png")
                document.body.style.background = "#FAAC58"
            } else if (idade < 50){
                //adulto
                img.setAttribute("src", "foto-adulto-h.png")
                document.body.style.background = "#BDBDBD"
            } else {
                //idoso
                img.setAttribute("src", "foto-idoso-h.png")
                document.body.style.background = "#6E6E6E"
            }
        } else if (fsex[1].checked) {
            gênero = "Mulher"
            if (idade >= 0 && idade < 10){
                //crianca
                img.setAttribute("src", "foto-bebe-m.png")
                document.body.style.background = "#FE9A2E"
            } else if (idade < 21){
                //jovem
                img.setAttribute("src", "foto-jovem-m.png")
                document.body.style.background = "#F5D0A9"
            } else if (idade < 50){
                //adulto
                img.setAttribute("src", "foto-adulto-m.png")
                document.body.style.background = "#0040FF"
            } else {
                //idoso
                img.setAttribute("src", "foto-idoso-m.png")
                document.body.style.background = "#F7D358"
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}