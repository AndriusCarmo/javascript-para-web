const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const baner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')


focoBt.addEventListener('click', () => {
    alterarcontexto('foco')
})

curtoBt.addEventListener('click', () => {
    alterarcontexto('descanso-curto')
})

longoBt.addEventListener('click', () => {
    alterarcontexto('descanso-longo')
})

function alterarcontexto(contexto){
    html.setAttribute('data-contexto',contexto)
    baner.setAttribute('src',`/imagens/${contexto}.png`)
    switch (contexto) {
        case "foco":
            titulo.innerHTML = `Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>`
            break;
        case "descanso-curto":
            titulo.innerHTML = `Que tal dar uma respirada? <strong class="app__title-strong">Faça uma palsa curta.</strong> `
            break;
        case "descanso-londo":
            titulo.innerHTML = `Hora de voltar a superfície. <strong class="app__title-strong">Faça uma pausa longa.</strong>`    
            break;
        default:
            break;
    }
}

