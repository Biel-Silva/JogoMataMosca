//Variaveis e funções
let x = window.innerWidth 
let y = window.innerHeight 
let novaMosca = document.createElement('img')
function verificarKill(){
    document.querySelector('#mosquito').remove()
}
let Dif = Number((window.location.search).slice(1))
let life = 1
let tempo = 15
let intervalo = 3000

//Verificando a dificuldade 
switch(Dif){
    case 2: 
        tempo = 30
        intervalo = 1600
        break;

    case 3:
        tempo = 50
        intervalo = 1000
        break;
    
    default:
        tempo = 60
        intervalo = 3000
}

document.querySelector('#time').innerHTML = `Tempo restante:${tempo}`

//Atualizando a dimensão disponível
const atualizaDimensao = ()=>{
    x = window.innerWidth - 70
    y = window.innerHeight - 70
}

//Função criadora dos mosquitos
function criador(){
    //Excluindo mosca já existente caso haja
    if(document.querySelector('#mosquito')){
        document.querySelector('#mosquito').remove()

        if(life >= 3){
            document.querySelector(`#v3`).src = 'imagens/coracao_vazio.png'
            window.location.href = 'gameOver.html'
        }
        
        document.querySelector(`#v${life}`).src = 'imagens/coracao_vazio.png'
        life++
    } 

    let yPosition = Math.floor(Math.random() * y) - 85
    let xPosition = Math.floor(Math.random() * x) - 80
    
    //Verificando se a instância está fora da página
    xPosition = xPosition < 0 ? 0 : xPosition
    yPosition = yPosition < 0 ? 0 : yPosition

    //Criando e setando a instância no body

    novaMosca.setAttribute('src', 'imagens/mosca.png')
    novaMosca.setAttribute('class', 'mosquito')
    novaMosca.setAttribute('onclick', 'verificarKill()')
    novaMosca.style.top = yPosition+'px'
    novaMosca.style.left = xPosition+'px'
    novaMosca.className = tamanhoMosquito()
    novaMosca.id = 'mosquito'
    document.body.appendChild(novaMosca)
}



//Tamanho randômico
function tamanhoMosquito(){
    const classe = Math.floor(Math.random() * 3)

    switch(classe){
        case 0: 
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
} 

//Criando as moscas de 2 em 2 segundos
setInterval(criador, intervalo)
let cronometro = setInterval(() => {
    document.getElementById('time').innerHTML = `Tempo restante:${tempo}`
    if(tempo <= 0 && life <= 3){
        window.location.href = 'gameWin.html'
        tempo = 0
    }
    tempo--
}, 1000)



