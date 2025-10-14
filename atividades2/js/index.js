// ## Enunciados dos Exercícios

// ### Exercício 1: Alterar Texto de um Elemento
// Ao clicar no botão `btn-alterar`, altere o conteúdo do elemento `mensagem` para "Mensagem alterada com sucesso!".

// ### Exercício 2: Resetar Texto
// Ao clicar no botão `btn-resetar`, restaure o texto original do elemento `mensagem`.

// ### Exercício 3: Incrementar e Decrementar
// Use os botões `btn-somar` e `btn-subtrair` para aumentar ou diminuir o número exibido em `contador-valor`.

// ### Exercício 4: Alterar Texto com Outro Botão
// Ao clicar no botão `btn-texto`, altere o conteúdo de `texto` para "Novo conteúdo exibido!".

// ### Exercício 5: Alterar Estilo de Título
// Ao clicar no botão `btn-alterar`, altere a cor do texto do elemento `titulo-principal` para azul.

// ### Exercício 6: Mostrar Nome Digitado
// Ao clicar no botão `btn-enviar`, exiba o texto "Olá, [nome digitado]!" dentro do elemento `resultado`.

// ### Exercício 7: Validação de Campo Vazio
// Se o campo `campo-nome` estiver vazio e o usuário clicar em `btn-enviar`, exiba "Campo obrigatório!" em vermelho (`erro`).

// ### Exercício 8: Mudar Cor de Fundo
// Ao clicar no botão `btn-mudar-cor`, alterne a cor de fundo do elemento `cores` entre amarelo e branco.

// ### Exercício 9: Ocultar e Mostrar Elemento
// Adicione um botão com ID `btn-toggle-msg` que oculte ou mostre o elemento `mensagem` ao ser clicado.

// ### Exercício 10: Atualizar Cor Atual
// Quando a cor de fundo for alterada (no exercício 8), atualize o texto do elemento `cor-atual` para refletir a nova cor.

const btnAlterar = document.getElementById("btn-alterar")
const btnMensagem = document.getElementById("mensagem")
const btnResetar = document.getElementById("btn-resetar")


const contadorValor = document.getElementById("contador-valor")
const btnSomar = document.getElementById("btn-somar")
const btnSubtrair = document.getElementById("btn-subtrair")
let number = 0


const btnTexto = document.getElementById("btn-texto")
const texto = document.getElementById("texto")


const btnaltCor = document.getElementById("btn-altCor")
const tituloPrin = document.getElementById("titulo-principal")

btnAlterar.addEventListener("click", function () {
    btnMensagem.innerText = "Mensagem alterada com sucesso!";
    tituloPrin.style.color = 'blue'
})

btnResetar.addEventListener("click", function () {
    btnMensagem.innerText = "Clique no botão para alterar esta mensagem.";
})

btnSomar.addEventListener("click", function () {
    contadorValor.textContent = number++
})

btnSubtrair.addEventListener("click", function () {
    contadorValor.textContent = number--
})

btnTexto.addEventListener("click", function () {
    texto.innerText = "Novo conteúdo exibido!";
})