const $c = document.createElement.bind(document);

const botaoConcluir = () => {
    const botaoConcluir = $c('button')

    botaoConcluir.classList.add('check-button')
    botaoConcluir.innerText = "concluir"
    botaoConcluir.addEventListener('click', concluirTarefa)

    return botaoConcluir;
}

function concluirTarefa(evento){
    const botaoConcluir = evento.target

    const tarefaCompleta = botaoConcluir.parentElement

    tarefaCompleta.classList.toggle('done')
}

export default botaoConcluir;