const $c = document.createElement.bind(document);

const botaoDeletar = () => {
    const botaoDeletar = $c('button')

    botaoDeletar.innerText = 'deletar'
    botaoDeletar.addEventListener('click', deletarTarefa)

    return botaoDeletar;
}

function deletarTarefa(evento){
    const botaoDeletar = evento.target

    const tarefaCompleta = botaoDeletar.parentElement

    tarefaCompleta.remove()

    return botaoDeletar
}

export default botaoDeletar;