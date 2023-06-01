const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

function criaLi(){
    const li = document.createElement("li");
    return li;
}

function criaTarefa(textoInput){
    const li = criaLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll("li");
    const listaDeTarefas = [];

    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace("Apagar", "");
        console.log(tarefaTexto);
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage = setItem("tarefas", tarefasJSON);
}

function criaBotaoApagar(li){
    li.innerHTML += " ";
    const botaoApagar = document.createElement("button");
    botaoApagar.innerText = "Apagar";
    botaoApagar.setAttribute("class", "apagar");
    botaoApagar.setAttribute("title", "Apagar essa tarefa");
    li.appendChild(botaoApagar);
}

function limpaInput(){
    inputTarefa.value = "";
    inputTarefa.focus();
}

inputTarefa.addEventListener("keypress", function (e){
    if(e.keyCode === 13){
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
})


btnTarefa.addEventListener("click", function (e){
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});


document.addEventListener("click", function(e){
    const el = e.target;
    if(el.classList.contains('apagar')){
        el.parentElement.remove();
    }
})

