let tarefas = []

function salvarTarefas(){
localStorage.setItem("tarefas",JSON.stringify(tarefas))
}

function carregarTarefas(){
let dados = localStorage.getItem("tarefas")
if(dados){
tarefas = JSON.parse(dados)
renderizarTarefas()
}
}

function adicionarTarefa(){

let input = document.getElementById("inputTarefa")
let texto = input.value.trim()
let mensagem = document.getElementById("mensagem")

if(texto === ""){
mensagem.textContent="Digite uma tarefa!"
return
}

tarefas.push({
texto:texto,
concluida:false
})

input.value=""
mensagem.textContent="Tarefa adicionada!"

renderizarTarefas()
salvarTarefas()
}

function renderizarTarefas(){

let lista = document.getElementById("listaTarefas")
lista.innerHTML=""

tarefas.forEach((tarefa,i)=>{

let li = document.createElement("li")

if(tarefa.concluida){
li.classList.add("concluida")
}

let checkbox = document.createElement("input")
checkbox.type="checkbox"
checkbox.checked=tarefa.concluida

checkbox.onclick=()=>{
tarefa.concluida=!tarefa.concluida
renderizarTarefas()
salvarTarefas()
}

let span = document.createElement("span")
span.textContent=tarefa.texto

let remover = document.createElement("button")
remover.textContent="X"

remover.onclick=()=>{
tarefas.splice(i,1)
renderizarTarefas()
salvarTarefas()
}

li.appendChild(checkbox)
li.appendChild(span)
li.appendChild(remover)

lista.appendChild(li)

})

document.getElementById("contador").textContent = tarefas.length + " tarefas"
}

function limparLista(){
tarefas=[]
renderizarTarefas()
salvarTarefas()
}

carregarTarefas()
