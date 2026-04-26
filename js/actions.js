import { equipes, estilos } from "./equipes.js"                             // pegar o local storage
import { mostrarResultado } from "./menu.js"                                // função para mostrar o menu suspenso

document.getElementById('btn').addEventListener('click', () => {
    const equipe = document.querySelector('#nomeEquipe').value              // identificar o valor do selec 
    const primeiroPiloto = document.querySelector('#nome1').value           // identificar o valor do prim. piloto
    const segundoPiloto = document.querySelector('#nome2').value            // identificar o valor do seg. piloto

    const pilotos = equipes[equipe]                                         // pegando a resposta do select e igualando com a equipe no local storage

    const correto1 = primeiroPiloto.toLowerCase().trim() === pilotos[0]     // validando o prim. piloto com o do local sotare
    const correto2 = segundoPiloto.toLowerCase().trim() === pilotos[1]      // fazendo o mesmo com o segundo

    mostrarResultado(correto1, correto2)                                    // usando a função exportada para criar a resposta suspensa
})

document.getElementById('nomeEquipe').addEventListener('change', () => {
    const equipe = document.querySelector('#nomeEquipe').value              // ln.5
    const fundo = document.body                                             // pegando o body para alterar a cor
    const img = document.getElementById('foto')                             // pegando a imagem atual para alteração
    const titulo = document.querySelector('.nomePrincipal')                 // pegando o title para troca

    const pilotos = equipes[equipe]                                         // ln.9
    const dados = estilos[equipe]                                           // pegando o estilo da equipe selecionada para uso

    if (dados) {                                                            // if que identifica se os dados batem, se sim executa
        fundo.style.backgroundColor = dados.cor                             // alterando a cor de acordo com a equipe
        img.src = dados.img                                                 // alterando a imagem de acordo com a equipe
    }

    titulo.textContent = pilotos[2]                                         // alterando o nome da equipe atual para a equipe do array no local storage
})


document.querySelector('#limpar').addEventListener('click', () => {         // função para limpar os campos de resposta do usuário
    document.querySelector('#nome1').value = ''                             // limpando
    document.querySelector('#nome2').value = ''                             // limpando
})