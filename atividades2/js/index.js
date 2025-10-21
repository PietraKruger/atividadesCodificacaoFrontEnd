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

const btnEnviar = document.getElementById("btn-enviar")
const resultado = document.getElementById("resultado")
const campoNome = document.getElementById("campo-nome")

const btnMudarCor = document.getElementById("btn-mudar-cor")
const cores = document.getElementById("cores")
const corAtual = document.getElementById("cor-atual")

const btnToggleMsg = document.getElementById("btn-toggle-msg")

//### Exercício 1: Alterar Texto de um Elemento
//Ao clicar no botão `btn-alterar`, altere o conteúdo do elemento `mensagem` para "Mensagem alterada com sucesso!".
btnAlterar.addEventListener("click", function () {
    btnMensagem.innerText = "Mensagem alterada com sucesso!";
    tituloPrin.style.color = 'blue'
})

// ### Exercício 2: Resetar Texto
// Ao clicar no botão `btn-resetar`, restaure o texto original do elemento `mensagem`.
btnResetar.addEventListener("click", function () {
    btnMensagem.innerText = "Clique no botão para alterar esta mensagem.";
    tituloPrin.style.color = 'black'
})

// ### Exercício 3: Incrementar e Decrementar
// Use os botões `btn-somar` e `btn-subtrair` para aumentar ou diminuir o número exibido em `contador-valor`.
btnSomar.addEventListener("click", function () {
    contadorValor.textContent = number++
})

// ### Exercício 4: Alterar Texto com Outro Botão
// Ao clicar no botão `btn-texto`, altere o conteúdo de `texto` para "Novo conteúdo exibido!".
btnSubtrair.addEventListener("click", function () {
    contadorValor.textContent = number--
})

// ### Exercício 5: Alterar Estilo de Título
// Ao clicar no botão `btn-alterar`, altere a cor do texto do elemento `titulo-principal` para azul.
btnTexto.addEventListener("click", function () {
    texto.innerText = "Novo conteúdo exibido!";
})

// ### Exercício 6: Mostrar Nome Digitado
// Ao clicar no botão `btn-enviar`, exiba o texto "Olá, [nome digitado]!" dentro do elemento `resultado`.

// ### Exercício 7: Validação de Campo Vazio
// Se o campo `campo-nome` estiver vazio e o usuário clicar em `btn-enviar`, exiba "Campo obrigatório!" em vermelho (`erro`).
btnEnviar.addEventListener("click", function () {
    if (campoNome.value === '') {
        resultado.style.color = "red"
        resultado.innerText = "Erro, este campo é obrigatório!"
    }
    else {
        resultado.style.color = "black"
        resultado.innerText = `Olá, ${campoNome.value}!`
    }
})

// ### Exercício 8: Mudar Cor de Fundo
// Ao clicar no botão `btn-mudar-cor`, alterne a cor de fundo do elemento `cores` entre amarelo e branco.

// ### Exercício 10: Atualizar Cor Atual
// Quando a cor de fundo for alterada (no exercício 8), atualize o texto do elemento `cor-atual` para refletir a nova cor.
btnMudarCor.addEventListener("click", function () {
    if (cores.style.backgroundColor === "yellow") {
        cores.style.backgroundColor = "white"
        corAtual.innerText = "Cor atual: branco"

    } else if (cores.style.backgroundColor === "white") {
        cores.style.backgroundColor = "yellow"
        corAtual.innerText = "Cor atual: amarelo"

    } else {
        cores.style.backgroundColor = "yellow"
        corAtual.innerText = "Cor atual: amarelo"
    }
})

// ### Exercício 9: Ocultar e Mostrar Elemento
// Adicione um botão com ID `btn-toggle-msg` que oculte ou mostre o elemento `mensagem` ao ser clicado.
btnToggleMsg.addEventListener("click", function () {
    if (btnMensagem.innerText === "") {
        btnMensagem.innerText = "Clique no botão para alterar esta mensagem."
    }

    else if (btnMensagem.innerText === "Clique no botão para alterar esta mensagem.") {
        btnMensagem.innerText = ""
    }

    else{
        btnMensagem.innerText = ""
    }
})