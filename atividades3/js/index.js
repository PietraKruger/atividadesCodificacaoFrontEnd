const paragrafoGeral = document.getElementsByClassName("paragrafo-geral")
const itemLista = document.getElementsByClassName("item-lista")
const totalitens = document.getElementById("total-itens")
const itemImportante = document.getElementsByClassName("item-importante paragrafo-geral")
const secao01 = document.getElementById("secao-1")
const cartao = document.getElementsByClassName("cartao")

// ### Exercício 1: Estilização em Massa
// Selecione todos os elementos que possuem a classe `paragrafo-geral` e altere a cor do texto de todos eles para azul (blue).

// ### Exercício 3: Modificação de Conteúdo
// Acesse todos os elementos com a classe `paragrafo-geral` e adicione a string " (lido)" ao final do texto de cada um deles.
for (paragrafo of paragrafoGeral) {
    paragrafo.style.color = "blue"
    paragrafo.innerText += "(lido)"
}

// ### Exercício 2: Contagem de Elementos
// Conte quantos elementos na página possuem a classe `item-lista`. Em seguida, atualize o texto do elemento com ID `total-itens` para exibir essa contagem.
console.log(itemLista.length)
totalitens.innerText = itemLista.length

// ### Exercício 4: Seleção com Múltiplas Classes
// Selecione apenas os elementos que possuem simultaneamente as classes `paragrafo-geral` e `item-importante`. Adicione a estes elementos a classe `destaque`.
for (elemento of itemImportante) {
    elemento.classList.add('destaque')
}

// ### Exercício 5: Busca dentro de um Elemento (Escopo)
// Selecione a `section` com o ID `secao-1`. Dentro dela, encontre todos os elementos com a classe `paragrafo-geral` e adicione uma borda vermelha (`1px solid red`).
for (elemento of secao01 && paragrafoGeral) {
    elemento.style.borderWidth = '1px';
    elemento.style.borderStyle = 'solid';
    elemento.style.borderColor = 'red';
}

// ### Exercício 6: Adicionando Eventos a Múltiplos Elementos
// Encontre todos os elementos com a classe `cartao`. Adicione um evento de `click` a cada um deles que exiba um `alert("Cartão clicado!")`.
for (click of cartao) {
    click.addEventListener("click", function () {
        alert("Cartão clicado!")
    })
}

// ### Exercício 7: Lendo Atributos de Dados
// Para cada elemento com a classe `cartao`, leia o valor do atributo `data-produto-id` e exiba no console.
for(cart of cartao){
    console.log(cart.getAttribute("data-produto-id"));
}

// ### Exercício 8: A Natureza "Viva" da HTMLCollection
// Crie uma variável armazenando a coleção dos elementos com a classe `cartao`. Imprima o tamanho no console. Depois, ao clicar no botão `btn-adicionar`, adicione um novo cartão e imprima novamente o tamanho da coleção.
console.log(cartao.length)
const textnode = document.createElement("div");
node.appendChild(textnode);

// ### Exercício 9: Alterando a Estrutura Interna (`innerHTML`)
// Selecione todos os elementos com a classe `item-lista` e transforme o texto interno em `<em>texto</em>`.

// ### Exercício 10: Adicionando e Removendo Classes
// Adicione eventos `mouseover` e `mouseout` aos elementos com a classe `cartao` para adicionar/remover a classe `borda-azul`.
