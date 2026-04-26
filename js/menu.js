const btn = document.querySelector('.plts')
const menu = document.querySelector('.menu')
const overlay = document.querySelector('.overlay')
const botaoFechar = document.querySelector('.sair')

// PILOTOS

btn.addEventListener('click', () => {
    const aberto = menu.style.display === 'block'

    if(aberto){
        menu.style.display = 'none'
        overlay.style.display = 'none'
    } else {
        menu.style.display = 'block'
        overlay.style.display = 'block'
    }
})

overlay.addEventListener('click', () => {
    menu.style.display = 'none'
    overlay.style.display = 'none'
})

botaoFechar.addEventListener('click', () => {
    menu.style.display = 'none'
    overlay.style.display = 'none'
})

// RESULTADO

const resultado = document.querySelector('.res')
const resTitulo = document.querySelector('.resh1')
const resP1 = document.querySelector('.resp1')
const resP2 = document.querySelector('.resp2')
const fechar = document.querySelector('.sairRes')

export function mostrarResultado(correto1, correto2) {
    resultado.style.display = 'flex'
    overlay.style.display = 'block'

    if(correto1 && correto2){
        resTitulo.textContent = '👏 Parabêns!!! 👏'
    } else {
        resTitulo.textContent = '❌ Errado!!! ❌'
    }

    if(correto1){
        resP1.textContent = '✅ O primeiro piloto está correto!'
    } else {
        resP1.textContent = '❌ O primeiro piloto está errado!'
    }

    if(correto2){
        resP2.textContent = '✅ O segundo piloto está correto!'
    } else {
        resP2.textContent = '❌ O segundo piloto está errado!'
    }
}

fechar.addEventListener('click', () => {
    resultado.style = 'none'
    overlay.style = 'none'
})