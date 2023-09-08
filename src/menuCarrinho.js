import { catalago } from "./ultilidades"


const idsProdutosCarrinhoComQuantidade = {}

function incrementarQuantidadeProduto(idProduto){
  idsProdutosCarrinhoComQuantidade[idProduto]++
  atualizarInformacaoQuantidade(idProduto)
}

function decrementarQuantidadeProduto(idProduto){
  idsProdutosCarrinhoComQuantidade[idProduto]--
  atualizarInformacaoQuantidade(idProduto)
}

function atualizarInformacaoQuantidade(idProduto){
  document.getElementById(`quantidade-${idProduto}`).innerText = idsProdutosCarrinhoComQuantidade[idProduto]
}

function abrirCarrinho(){
    document.getElementById('carrinho').classList.add('right-[0px]')
    document.getElementById('carrinho').classList.remove('right-[-360px]')
}

function fecharCarrinho(){
    document.getElementById('carrinho').classList.remove('right-[0px]')
    document.getElementById('carrinho').classList.add('right-[-360px]')
}

export function inicializarCarrinho(){
  const botaoFecharCarrinho = document.getElementById('fechar-carrinho')
  const botaoAbrirCarrinho = document.getElementById('abrir-carrinho')
  botaoFecharCarrinho.addEventListener('click', fecharCarrinho)
  botaoAbrirCarrinho.addEventListener('click', abrirCarrinho)
}

const elementoArticle = document.createElement("article")
const articleClasses = ['flex','bg-slate-100','rounded-lg','p-1','relative']
for(const articleClasses of articleClasses){
  elementoArticle.classList.add(articleClasses)
}


export function adicionarProdutoCarrinho(idProduto){
  if(idProduto in idsProdutosCarrinhoComQuantidade){
    incrementarQuantidadeProduto(idProduto)
    return;
  }
  idsProdutosCarrinhoComQuantidade[idProduto] = 1
  const produto = catalago.find(p => p.id === idProduto)

  const containerProdutoCarrinho = document.getElementById('produtos-carrinho')


  const elementoArticle = document.createElement('article')
  const articleClasses = ['flex','bg-slate-100','rounded-lg','p-1','relative']
  for(const articleClasses of articleClasses){
    elementoArticle.classList.add(articleClasses)
  }
  
  const cartaoProdutoCarrinho = `<button id="fechar-carrinho" class="absolute top-0 right-2">
    <i class="fa-sharp fa-solid fa-circle-xmark fa-shake text-slate-500 absolute top-0 right-2 p-2 hover:text-slate-900"></i>
  </button>
    <img 
      src="./assets/img/${produto.imagem}" alt="carrinho: ${produto.nome}" class="h-24 rounded-lg">
  <div class="p-2 flex flex-col justify-between">
    <p class="text-slate-900 text-s">${produto.nome}</p>
    <p class="text-slate-400 text-xm">Tamanho: M</p>
    <p class="text-green-700 text-lg">$${produto.preco}</p>
  </div>
  <div class="flex text-slate-950 items-end absolute bottom-0 right-2 text-lg">
    <button id="decrementar-produto-${produto.id}">-</button>
    <p id="quantidade-${produto.id}"class='ml-2'>${idsProdutosCarrinhoComQuantidade[produto.id]}</p>
    <button id="incrementar-produto-${produto.id}" class='ml-2'>+</button>
  </div>`

  elementoArticle.innerHTML = cartaoProdutoCarrinho
  containerProdutoCarrinho.appendChild(elementoArticle)

  document.getElementById(`decrementar-produto-${produto.id}`).addEventListener('click', ()=> decrementarQuantidadeProduto(produto.id))

  document.getElementById(`incrementar-produto-${produto.id}`).addEventListener('click', ()=> incrementarQuantidadeProduto(produto.id))
}