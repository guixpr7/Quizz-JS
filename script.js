
let pontos = 0

const opcoes = document.querySelectorAll(".opcao")

opcoes.forEach(function(botao){

    botao.addEventListener("click", function(){

        if(botao.dataset.correta){
            pontos++
            botao.style.backgroundColor = "lightgreen"
        } else {
            botao.style.backgroundColor = "salmon"
        }

        botao.disabled = true

    })

})

document.getElementById("verificar").addEventListener("click", function(){

    document.getElementById("resultado").innerText =
    "Sua pontuação foi: " + pontos

})
