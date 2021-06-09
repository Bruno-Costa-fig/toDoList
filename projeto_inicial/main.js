import botaoConcluir from "./components/concluirTarefa.js"
import botaoDeletar from "./components/deletarTarefa.js"

const $ = document.querySelector.bind(document);
const $c = document.createElement.bind(document);

const criarTarefa = (evento) => {
    evento.preventDefault();
    const lista = $('[data-list]');
    const input = $('[data-form-input]');
    const texto = input.value;

    const tarefa = $c('li')
    tarefa.classList.add('task')

    const conteudo = `<p class="content">${texto}</p>`
    tarefa.innerHTML = conteudo

    tarefa.appendChild(botaoConcluir())
    tarefa.appendChild(botaoDeletar())
    lista.appendChild(tarefa)
    input.value = "";
}

const novaTarefa = $('[data-form-button]');

novaTarefa.addEventListener('click', criarTarefa);
